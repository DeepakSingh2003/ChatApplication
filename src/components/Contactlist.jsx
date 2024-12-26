import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const ContactList = () => {
  const { state, dispatch } = useContext(ChatContext);

  const selectContact = (contact) => {
    dispatch({ type: "SET_ACTIVE_CONTACT", payload: contact });
  };

  return (
    <div className="contact-list">
      <div className="chats">
        <h3>Chats</h3>
        <div className="chaticons">
          <i class="ri-chat-new-line"></i>
          <i class="ri-more-2-line"></i>
        </div>
      </div>
      {state.contacts.map((contact) => (
        <div
          key={contact.id}
          onClick={() => selectContact(contact)}
          style={{ cursor: "pointer", padding: "5px 0" }}
        >
          <div className="user">
            <i class="ri-user-fill"></i>
            <p className="contactitems">{contact.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
