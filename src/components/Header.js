import React from 'react';


import './Header.css';
import Participants from './Participants';

const Header = (props) => {
  const { participants, currentUser } = props;
  const medium = 200;
  
  return <header>
    {participants.filter(participant => 
    participant.username !== currentUser.username).map((participant, idx) => {
      return <Participants participant={participant} key={idx} />;
    })}
    </header>;
};

export default Header;
