import React from "react";
import ContactList from "./components/ContactList";
import ChatWindow from "./components/ChatWindow";
import { ChatProvider } from "./context/ChatContext";
import "./App.css";

function App() {
  return (
    <ChatProvider>
      <div className="app">
        <ContactList />
        <ChatWindow />
      </div>
    </ChatProvider>
  );
}

export default App;
