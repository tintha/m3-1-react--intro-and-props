import React from 'react';

import './Participants.css';
import Avatar from './Avatar';

const Participants = (props) => {
    return <div className='avatar-container'>
    <div><Avatar users={props.participant} /></div>
    <div><p>{props.participant.username}</p></div>
   </div>;
}

export default Participants;