import { createSlice } from "@reduxjs/toolkit";

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
        addWsMessage: (state, action) => {
            state.messages = state.messages.concat(action.payload);
        },
        popWsMessage: (state ) => {
            state.messages = state.messages.slice(0, state.messages.length - 1);
        }
    }
});

export const { setWs, setWsConnected, setWsMessages, addWsMessage, popWsMessage } = wsSlice.actions;
export default wsSlice.reducer;