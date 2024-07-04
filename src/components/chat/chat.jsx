import { useState } from 'react'
import AutoResizeTextarea from '../utils/textArea/textArea'
import './styles/desktop.css'

import React, { useEffect } from 'react';
import { responseToJson } from './core/decode';
import UserMessage from './chatComponents/message/userMessage';
import ServerMessage from './chatComponents/message/serverMessage';
import WaitMessage from './chatComponents/message/waitMessage';


function Chat({ id = null, store_name = "test_data" }) {
    const configMessage = `{"store_name": "${store_name}", "chat_id": ${id ? id : '"None"'}}`
    const [ws, setWs] = useState(null);
    const [messages, setMessages] = useState([]);
    const [query, setQuery] = useState('');
    const [connected, setConnected] = useState(false)

    useEffect(() => {
        // Crear conexión WebSocket
        const ws = new WebSocket('ws://192.168.1.251:8000/ws/chat');
        // const ws = new WebSocket('wss://dev.chat.flowychat.com/api/ws/chat');

        ws.onopen = () => {
            console.log('Conectado al servidor');
            ws.send(configMessage);
        };

        ws.onmessage = (event) => {
            if (event.data == 'connected') {
                setConnected(true)
            }
            else {
                let data = responseToJson(event.data)
                // setMessages(prevMessages => [...prevMessages, <ServerMessage data={data} />]);
                setMessages(prevMessages => {
                    // Calcula el índice del penúltimo elemento
                    const lastIndex = prevMessages.length - 1;
                  
                    // Crea una nueva lista con el penúltimo elemento excluido
                    const newMessages = prevMessages.slice(0, lastIndex).concat(<ServerMessage data={data} />);
                  
                    return newMessages;
                  });
                  
            }
        };

        ws.onerror = (error) => {
            console.error('Error en la conexión:', error);
        };

        ws.onclose = () => {
            console.log('Desconectado del servidor');
        };

        setWs(ws);

        return () => {
            ws.close();
        };
    }, []);

    const sendMessage = () => {
        if (ws && ws.readyState === WebSocket.OPEN && query.trim() !== '') {
            ws.send(query);
            setMessages(prevMessages => [...prevMessages, <UserMessage text={query} />, <WaitMessage />]);
            setQuery('');
        }
    };

    return (
        <div>
            {connected ? <ConnectedChat messages={messages} sendMessage={sendMessage} query={query} setQuery={setQuery} /> : <UnconnectedChat />
            }
        </div>
    )
}

function UnconnectedChat() {
    return (
        <div className='chatBox disconnected'>
            <img src="/gifs/loading.gif" alt="connecting"
                style={{ width: "70px", height: "70px" }} />
            <text style={{ fontSize: '80%', marginTop: '20px' }}>
                CONNECTING
            </text>
        </div>)
}

function ConnectedChat({ messages, sendMessage, query, setQuery }) {
    return (
        <div className='chatBox'>
            <ChatHistory messages={messages} />
            <SendMessageToChat sendMessage={sendMessage} query={query} setQuery={setQuery} />
        </div>)
}

function ChatHistory({ messages }) {
    return <div className='historySpaceChatBox'>
        <div className='historySpaceChatBoxContent'>
            {messages}
        </div>
    </div>
}

function SendMessageToChat({ sendMessage, query, setQuery }) {
    const inputMessage = <AutoResizeTextarea query={query} setQuery={setQuery} />

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
