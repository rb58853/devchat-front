import { useState } from 'react'
import AutoResizeTextarea from '../utils/textArea/textArea'
import './styles/desktop.css'

import React, { useEffect } from 'react';
import { responseToJson } from './core/decode';
import UserMessage from './chatComponents/message/userMessage';
import ServerMessage from './chatComponents/message/serverMessage';
import WaitMessage from './chatComponents/message/waitMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addWsMessage, popWsMessage, setWs, setWsConnected, setWsMessages } from '../../redux/websocket/wsSlice';

// const url = 'ws://192.168.1.251:8000/ws/chat'; // Puedes cambiar esto según tus necesidades
const url = 'wss://dev.chat.flowychat.com/api/ws/chat'; // Puedes cambiar esto según tus necesidades

function connectWebSocket(url, configMessage) {
    return new Promise((resolve, reject) => {
        const ws = new WebSocket(url);

        ws.onopen = () => {
            console.log('Conectado al servidor');
            ws.send(configMessage);
            resolve(ws); // Resolvemos la promesa cuando la conexión es abierta
        };

        ws.onerror = (error) => {
            console.error('Error en la conexión:', error);
            reject(error); // Rechazamos la promesa si hay un error
        };

        ws.onclose = () => {
            console.log('Desconectado del servidor');
            // Aquí podrías manejar la reconexión o simplemente cerrar la conexión
        };
    });
}

function Chat({ id = null, store_name = "test_data" }) {
    const configMessage = `{"store_name": "${store_name}", "chat_id": ${id ? id : '"None"'}}`
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');

    const webSocket = useSelector((state) => state.ws)
    const [ws, setThisWs] = useState(webSocket.ws);
    const [connected, setConnected] = useState(webSocket.connected)

    useEffect(() => {
        if (!connected) {
            connectWebSocket(url, configMessage)
                .then((ws) => {
                    setThisWs(ws);
                    dispatch(setWs(ws))

                    ws.onmessage = (event) => {
                        if (event.data === 'connected' || event.data.slice(0, 5) === 'error') {
                            if (event.data === 'connected') {
                                setConnected(true)
                                dispatch(setWsConnected(true))

                            }
                            if (event.data.slice(0, 5) === 'error') {
                                setConnected(false)
                                dispatch(setWsConnected(false))
                            }
                        }
                        else {
                            let data = responseToJson(event.data)
                            // dispatch(setWsMessages([...webSocket.messages, <ServerMessage data={data} />]))
                            dispatch(popWsMessage())
                            dispatch(addWsMessage(<ServerMessage data={data} />))
                            // dispatch(setWsMessages(webSocket.messages.slice(0, webSocket.messages.length - 1).concat(<ServerMessage data={data} />)))
                        }
                    };
                })
                .catch((error) => {
                    console.error("No se pudo conectar al servidor:", error);
                    setConnected(false);
                    dispatch(setWsConnected(false))
                    // Aquí puedes manejar el error, como intentar reconectar o mostrar un mensaje al usuario
                });
        }
    }, [configMessage, connected, dispatch, webSocket.messages]);

    const sendMessage = () => {
        if (ws && ws.readyState === WebSocket.OPEN && query.trim() !== '') {
            ws.send(query);
            dispatch(setWsMessages([...webSocket.messages, <UserMessage text={query} />, <WaitMessage />]))
            setQuery('');
        }
    };

    return (
        <div>
            {connected ? <ConnectedChat sendMessage={sendMessage} query={query} setQuery={setQuery} /> : <UnconnectedChat />}
        </div>
    )
}

function UnconnectedChat() {
    return (
        <div className='chatBox disconnected'>
            <img src={process.env.PUBLIC_URL + "/gifs/loading.gif"} alt="connecting"
                style={{ width: "70px", height: "70px" }} />
            <text style={{ fontSize: '80%', marginTop: '20px' }}>
                CONNECTING
            </text>
        </div>)
}

function ConnectedChat({ sendMessage, query, setQuery }) {
    return (
        <div className='chatBox'>
            <ChatHistory />
            <SendMessageToChat sendMessage={sendMessage} query={query} setQuery={setQuery} />
        </div>)
}

function ChatHistory() {
    const webSocket = useSelector((state) => state.ws)

    return <div className='historySpaceChatBox'>
        <div className='historySpaceChatBoxContent'>
            {/* {messages} */}
            {webSocket.messages}
        </div>
    </div>
}

function SendMessageToChat({ sendMessage, query, setQuery }) {
    const inputMessage = <AutoResizeTextarea query={query} setQuery={setQuery} sendMessage={sendMessage} />

    return <div className='inputMessageSpace'>
        {/* <div className='line' /> */}
        <div className='inputMessageSpaceContent'>
            {/* <textarea className='inputMessage' type="text" placeholder='send message'  /> */}
            {inputMessage}
            <button className='buttonSendMesage'
                onClick={() => { sendMessage() }}
            >
                <img style={{ width: '100%', height: '100%' }}
                    src={process.env.PUBLIC_URL + "/icons/dark/send.svg"} alt="" />
            </button>
        </div>
    </div>
}

export default Chat
