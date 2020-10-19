import React from 'react';

import './ChatMessage.css';
import Avatar from './Avatar'

const ChatMessage = (props) => {
    const { message, messageType } =  props;
    if (messageType === 'sent') {
        return <div className='received-container'>
        <div className='chat-text-container'>
        <p className='text-message received'>{message.body}</p>
        </div>    
        </div>
    } else {
   
return <div className='chat-message'>
    <div><Avatar src={message.user.avatar} alt='message.user.username' width={'24px'} /></div>
    <div className='chat-text-container'>
    <p className='user-name'>{message.user.username}</p>
    <p className='text-message'>{message.body}</p>
    </div>    
    </div>;
    }
};

export default ChatMessage;