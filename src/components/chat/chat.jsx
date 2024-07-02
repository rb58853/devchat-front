import { useState } from 'react'
import AutoResizeTextarea from '../utils/textArea/textArea'
import './styles/desktop.css'

function Chat({ id = null }) {
    return (
        <div className='chatBox'>
            {/* <BarChatBox id={id} /> */}
            <ChatHistory />
            <SendMessageToChat />
        </div>)
}

function ChatHistory({ id }) {
    return <div className='historySpaceChatBox'>
        <div className='historySpaceChatBoxContent'>
            <text className=''>
                {`Historia del chat y to eso`}
            </text>
        </div>
    </div>
}

function SendMessageToChat() {
    const [query, setQuery] = useState("")
    const inputMessage = <AutoResizeTextarea setQuery={setQuery} />

    return <div className='inputMessageSpace'>
        {/* <div className='line' /> */}
        <div className='inputMessageSpaceContent'>
            {/* <textarea className='inputMessage' type="text" placeholder='send message'  /> */}
            {inputMessage}
            <button className='buttonSendMesage'
                onClick={() => { }}
            >
                <img style={{ width: '100%', height: '100%' }}
                    src="/icons/dark/send.svg" alt="" />
            </button>
        </div>
    </div>
}

export default Chat