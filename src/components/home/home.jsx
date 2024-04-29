import { combineSlices } from '@reduxjs/toolkit'
import Chat from '../chat/chat'
import './styles/desktop.css'
import { useState } from 'react'

function Home() {
    return (
        <section className="home">
            <Bar/>
            <Chats />
        </section>
    )
}

function Chats() {
    const [chats, setChats] = useState([<Chat />,<Chat />,<Chat />,<Chat />])

    return (
        <div className='chatsSpace'>
            {chats}
        </div>
    )
}

function Bar() {
    return (
        <div className='optionsBar'>

        </div>
    )
}

export default Home
