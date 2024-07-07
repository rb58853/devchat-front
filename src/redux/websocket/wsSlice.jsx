import { createSlice } from "@reduxjs/toolkit";
import { connect } from "react-redux";

const initialState = {
    ws: null,
    messages: [],
    connected: false,
};

export const wsSlice = createSlice({
    name: "ws",
    initialState,
    reducers: {
        setWs: (state, action) => {
            state.ws = action.payload;
        },
        setWsConnected: (state, action) => {
            state.connected = action.payload;
        },
        setWsMessages: (state, action) => {
            state.messages = action.payload;
        },
    }
});

export const { setWs, setWsConnected, setWsMessages } = wsSlice.actions;
export default wsSlice.reducer;