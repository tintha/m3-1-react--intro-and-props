import React from 'react';

import './ChatMessage.css';

const ChatMessage = (props) => {
    console.log(props);
return <div className='chat-message'>
    <div><img src={props.message.user.avatar} /></div>
    <div className='chat-text-container'>
    <p className='user-name'>{props.message.user.username}</p>
    <p className='text-message'>{props.message.body}</p>
    </div>    
    </div>;
};

export default ChatMessage;