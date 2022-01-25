import { configureStore } from "@reduxjs/toolkit";
import { buttonSlice } from "./buttonReducer";

export const store = configureStore({
  reducer: {
    header_button: buttonSlice.reducer,
    message_error: buttonSlice.reducer,
  },
});
