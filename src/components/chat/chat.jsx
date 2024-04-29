import './styles/desktop.css'

function Chat() {
    const id = 1
    return (
        <div className='chatBox'>
            <BarChatBox id={id} />
            <ChatHistory />
            <SendMessageToChat />
        </div>)
}

function BarChatBox({ id }) {
    return <div className='barChatBox'>
        <div className='barChatBoxContent'>
            <text>
                {`chat id: ${id}`}
            </text>
        </div>
    </div>
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
    return <div className='inputMessageSpace'>
        {/* <div className='line' /> */}
        <div className='inputMessageSpaceContent'>
            <input className='inputMessage' type="text" placeholder='send message'/>
            <button className='buttonSendMesage'>
                <img style={{width: '100%', height:'100%'}}
                src="/icons/send.svg" alt="" />
            </button>
        </div>
    </div>
}

export default Chat