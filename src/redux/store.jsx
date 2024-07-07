import { configureStore } from "@reduxjs/toolkit";
import wsReducer from "./websocket/wsSlice";

export const store = configureStore({
  reducer: {
    ws: wsReducer,
  },
});