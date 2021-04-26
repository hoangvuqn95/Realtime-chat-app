import React from 'react';
import './Input.css';

InputComponent.propTypes = {};

function InputComponent(props) {
  const { message, setMessage, sendMessage } = props;
  return (
    <form className="form">
      <input
        type="text"
        className="input"
        placeholder="Type a message..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
      />

      <button className="sendButton" onclick={(event) => sendMessage(event)}>
        Send Message
      </button>
    </form>
  );
}

export default InputComponent;
