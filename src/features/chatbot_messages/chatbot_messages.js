import { createSlice } from "@reduxjs/toolkit";

export const chatbot_messagesSlice = createSlice({
  name: "chatbot_messages",
  initialState: {
    value: [
      {
        uniqueId: Math.random(),
        id: 1,
        message: "Hello , I'm Medi",
      },
      {
        uniqueId: Math.random(),
        id: 1,
        message: "How Can I Help You ?",
      },
    ],
  },
  reducers: {
    addMessages: (state, action) => {
      state.value = (oldArray) => [...oldArray, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMessages } = chatbot_messagesSlice.actions;

export default chatbot_messagesSlice.reducer;
