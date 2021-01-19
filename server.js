const express = require("express");
const mongoose = require("mongoose");
const { mongoOptions, sessionOptions } = require("./utils/config");
const routes = require("./routes/router");
const app = express();
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./utils/passport");
const logger = require("morgan");
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const { addUser, removeUser, getUser, getUsersInRoom } = require('./utils/users');

const router = require('./routes/router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// logging (development)
app.use(logger("dev"));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets from react build
app.use(express.static("client/build"));

// We need to use sessions to keep track of our user's login status
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

app.use(cors());
app.use(router);

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);

    socket.join(user.room);

    socket.emit('message', { user: 'Admin', text: `${user.name}, Welcome to room ${user.room}!`});
    socket.broadcast.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

// Connect to the Mongo DB
mongoose.connect(process.env.ATLAS_URL || "mongodb://localhost/mern", mongoOptions);

// Start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
