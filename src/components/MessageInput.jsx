import React, { useState, useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const MessageInput = () => {
  const [text, setText] = useState("");
  const { state, dispatch, postData } = useContext(ChatContext);

  const sendMessage = async () => {
    if (!text) return;

    const newMessage = { sender: "You", text };

    dispatch({
      type: "SEND_MESSAGE",
      payload: { contactId: state.activeContact.id, message: newMessage },
    });

    // Sync with InstantDB
    await postData(`/messages`, {
      contactId: state.activeContact.id,
      ...newMessage,
    });

    setText("");
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;
