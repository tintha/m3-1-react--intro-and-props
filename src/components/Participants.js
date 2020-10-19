import React from 'react';

import './Participants.css';
import Avatar from './Avatar';

const Participants = (props) => {
    const { participant } = props;
    return <div className='avatar-container'>
    <div><Avatar src={participant.avatar} width={'50px'} alt={participant.username} /></div>
    <div><p>{participant.username}</p></div>
   </div>;
}

export default Participants;