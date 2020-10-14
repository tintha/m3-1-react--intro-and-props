import React from 'react';

import './Avatar.css';

const Avatar = (props) => {
    console.log(props);
    return <div className='avatar-container'>
        <div><img className='topAvatar' src={props.participant.avatar} alt='' /></div>
        <div><p>{props.participant.username}</p></div>
       </div>;
}

export default Avatar;