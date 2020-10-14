import React from 'react';


import './Header.css';
import Avatar from './Avatar';

const Header = (props) => {
  const medium = 200;
  const FilteredParticipantList = props.participants.filter(participant => 
    participant.username !== props.currentUser.username);
    console.log(FilteredParticipantList);
  return <header>
    {FilteredParticipantList.map((participant, idx) => {
      return <Avatar participant={participant} key={idx} />;
    })}
    </header>;
};

export default Header;
