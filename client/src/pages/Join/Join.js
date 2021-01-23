import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Nav from '../../components/custom-nav/custom-nav.component.jsx';

import './Join.css';


export const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
          <Nav />
      <div className="joinInnerContainer">
        <h1 className="heading">Movie Chat</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/room?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Enter Chat</button>
        </Link>
      </div>
    </div>
  );
}