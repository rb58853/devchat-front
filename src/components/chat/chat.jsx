import { useState } from 'react'
import AutoResizeTextarea from '../utils/textArea/textArea'
import './styles/desktop.css'

import React, { useEffect } from 'react';

function Chat({ id = null, store_name = "test_data" }) {
    const [ws, setWs] = useState(null);
    const [messages, setMessages] = useState([]);
    // const [query, setQuery] = useState("Texto");
    const [query, setQuery] = useState(`{"store_name": "${store_name}", "chat_id": ${id ? id : '"None"'}}`);
    const [intialMessage, setInitialMEssage] = useState(false)

    useEffect(() => {
        // Crear conexión WebSocket
        const ws = new WebSocket('ws://127.0.0.1:8000/ws/chat');
        // const ws = new WebSocket('wss://dev.chat.flowychat.com/api/ws/chat');

        ws.onopen = () => {
            console.log('Conectado al servidor');
        };

        ws.onmessage = (event) => {
            // Agregar mensajes recibidos a la lista de mensajes
            console.log('event.data');
            setMessages(prevMessages => [...prevMessages, event.data]);

        };

        ws.onerror = (error) => {
            console.error('Error en la conexión:', error);
        };

        ws.onclose = () => {
            console.log('Desconectado del servidor');
        };

        setWs(ws);

        // sendMessage()
        return () => {
            ws.close();
        };
    }, []);

    const sendMessage = () => {
        if (ws && query.trim() !== '') {
            ws.send(query);
            setQuery('');
            setInitialMEssage(true);
        }
    };
    // useEffect(() => { if (!intialMessage) { sendMessage() } }, [ws, intialMessage])

    return (
        <div className='chatBox'>
            {/* <BarChatBox id={id} /> */}
            <text style={{ color: 'white' }}>
                {/* {query} */}
                {messages}
            </text>
            <ChatHistory />
            <SendMessageToChat sendMessage={sendMessage} setQuery={setQuery} />
        </div>)
}

function ChatHistory() {
    return <div className='historySpaceChatBox'>
        <div className='historySpaceChatBoxContent'>
            <text className=''>
                {`Historia del chat y to eso`}
            </text>
        </div>
    </div>
}

function SendMessageToChat({ sendMessage, setQuery }) {
    const inputMessage = <AutoResizeTextarea setQuery={setQuery} />

    return <div className='inputMessageSpace'>
        {/* <div className='line' /> */}
        <div className='inputMessageSpaceContent'>
            {/* <textarea className='inputMessage' type="text" placeholder='send message'  /> */}
            {inputMessage}
            <button className='buttonSendMesage'
                onClick={() => { sendMessage() }}
            >
                <img style={{ width: '100%', height: '100%' }}
                    src="/icons/dark/send.svg" alt="" />
            </button>
        </div>
    </div>
}

export default Chat