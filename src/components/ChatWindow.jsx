import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import Message from "./Message";
import MessageInput from "./MessageInput";

const ChatWindow = () => {
  const { state } = useContext(ChatContext);
  const { activeContact, messages } = state;

  if (!activeContact) {
    return (
      <div className="chat-window1">
        <img src="../public/wa669aeJeom.png" alt="" srcset="" />
        <h1>Download WhatsApp for Windows</h1>
        <p>
          Make calls, share your screen and get a faster experience when you
          download the Windows app.
        </p>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <div className="userchat">
        <i class="ri-user-fill"></i>
        <h3>{activeContact.name}</h3>
      </div>
      <div className="message-list">
        {messages[activeContact.id]?.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
