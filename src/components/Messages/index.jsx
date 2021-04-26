import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import MessageChild from './MessageChild/index';
import './Messages.css';

Messages.propTypes = {};

function Messages({ messages, name }) {
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, idx) => (
        <div key={idx}>
          <MessageChild message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}

export default Messages;
