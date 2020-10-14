import React from 'react';


import './Header.css';
import Participants from './Participants';

const Header = (props) => {
  const medium = 200;
  
  return <header>
    {props.participants.filter(participant => 
    participant.username !== props.currentUser.username).map((participant, idx) => {
      return <Participants participant={participant} key={idx} />;
    })}
    </header>;
};

export default Header;
