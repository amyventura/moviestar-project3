import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import {TextContainer} from '../../components/TextContainer/TextContainer'
import {TopBar} from '../../components/TopBar/TopBar';
import {Input} from '../../components/Input/Input';
import {Messages} from '../../components/Messages/Messages';

import './Chat.css';

let socket;

export const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'http://localhost:3001';


  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    console.log("use effect")
    socket.on('message', message => {
      console.log(message, "!!!!!!!!!!!!!!!!!!!");
      setMessages(msgs => [ ...msgs, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();
    console.log(message);
    if(message) {
      console.log("inside");
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }


  return (
    <div className="outerContainer">
    <TextContainer />
      <div className="container">
          <TopBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}