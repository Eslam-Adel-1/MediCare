import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      email: "asdas",
      name: "zd",
      id: "",
      userPhoto: "",
      token: "",
    },
  },
  reducers: {
    changeUserEmail: (state, action) => {
      state.value.email = action.payload;
    },
    changeUserName: (state, action) => {
      state.value.name = action.payload;
    },
    changeUserId: (state, action) => {
      state.value.id = action.payload;
    },
    changeUserPhoto: (state, action) => {
      state.value.userPhoto = action.payload;
    },
    changeUserToken: (state, action) => {
      state.value.token = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeUserEmail,
  changeUserId,
  changeUserName,
  changeUserPhoto,
  changeUserToken,
} = userSlice.actions;

export default userSlice.reducer;
