import React from "react";

const Message = ({ message }) => {
  return (
    <div className="message">
      <div className="msg-child">
        <strong>{message.sender}:</strong> {message.text}
      </div>
    </div>
  );
};

export default Message;
