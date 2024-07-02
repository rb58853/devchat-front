import Chat from '../chat/chat'
import './styles/desktop.css'
import { useState } from 'react'

function Home() {
    return (
        <section className="home">
            {/* <Bar/> */}
            <Chat />
        </section>
    )
}

function Bar() {
    return (
        <div className='optionsBar'>

        </div>
    )
}

export default Home
