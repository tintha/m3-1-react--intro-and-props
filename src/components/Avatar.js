import React from 'react';

import './Avatar.css';

const Avatar = (props) => {
    return <img className='bigAvatar' 
    src={props.users.avatar}
    alt={props.users.username}
  />
}

export default Avatar;