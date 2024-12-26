import React, { createContext, useReducer, useEffect } from "react";
import chatReducer from "../reducers/chatreducer";
import useIndexedDB from "../hooks/useIndexedDB";
import useInstantDB from "../hooks/useInstantDB";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const initialState = {
    contacts: [
      { id: 1, name: "Deepak" },
      { id: 2, name: "Mandeep" },
    ],
    messages: {}, // Will be loaded from IndexedDB or InstantDB
    activeContact: null,
  };

  const [state, dispatch] = useReducer(chatReducer, initialState);

  const { saveData, getData, getAllData } = useIndexedDB(
    "ChatAppDB",
    "messages"
  );
  const { fetchData, postData } = useInstantDB("https://example.instantdb.com");

  // Load data from IndexedDB on initial load
  useEffect(() => {
    const loadMessages = async () => {
      const storedMessages = await getAllData();
      const messages = storedMessages.reduce((acc, item) => {
        acc[item.id] = item.data;
        return acc;
      }, {});
      dispatch({ type: "LOAD_MESSAGES", payload: messages });
    };
    loadMessages();
  }, []);

  // Sync new messages to IndexedDB whenever messages change
  useEffect(() => {
    Object.entries(state.messages).forEach(([contactId, messages]) => {
      saveData(parseInt(contactId), messages);
    });
  }, [state.messages]);

  return (
    <ChatContext.Provider value={{ state, dispatch, postData }}>
      {children}
    </ChatContext.Provider>
  );
};
