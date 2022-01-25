import { createSlice } from "@reduxjs/toolkit";

export const buttonSlice = createSlice({
  name: "button",
  initialState: {
    header_button: {
      share_button: false,
      google_button: {
        email: "",
        name: "",
      },
      login_button: false,
      mode: "light",
      allSongs: [],
      typeSongs: [],
    },
    message_error: {
      error_login: {
        email: "",
        password: "",
        type: false,
      },
    },
  },
  reducers: {
    btn_share: (state, actions) => {
      state.header_button.share_button = actions.payload;
    },
    btn_google: (state, actions) => {
      state.header_button.google_button.email = actions.payload.email;
      state.header_button.google_button.name = actions.payload.name;
    },
    btn_login: (state, actions) => {
      state.header_button.login_button = actions.payload;
    },
    showMessage: (state, actions) => {
      state.message_error.error_login.email = actions.payload.email;
      state.message_error.error_login.password = actions.payload.password;
      state.message_error.error_login.type = actions.payload.type;
    },
    switchMode: (state, actions) => {
      state.header_button.mode = actions.payload;
    },
    getAllSongs: (state, actions) => {
      state.header_button.allSongs = actions.payload;
    },
    getTypeSongs: (state, actions) => {
      state.header_button.typeSongs = actions.payload;
    },
  },
});
