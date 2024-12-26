const chatReducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_CONTACT":
      return { ...state, activeContact: action.payload };
    case "SEND_MESSAGE":
      const { contactId, message } = action.payload;
      return {
        ...state,
        messages: {
          ...state.messages,
          [contactId]: [...(state.messages[contactId] || []), message],
        },
      };
    case "LOAD_MESSAGES":
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};

export default chatReducer;
