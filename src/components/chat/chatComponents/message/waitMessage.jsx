import './styles/desktop.css'
function WaitMessage() {
    return (
        <div className="waitMessage">
            <img className='waitMessageFloat' src="/gifs/messages-typing.gif" alt="connecting" />
            {/* <div>
                <img className='waitMessageFloat other' src="/gifs/waitMessage.gif" alt="connecting" />
                <img className='waitMessageFloat other' src="/gifs/waitMessage.gif" alt="connecting" />
                <img className='waitMessageFloat other' src="/gifs/waitMessage.gif" alt="connecting" />
                <img className='waitMessageFloat other' src="/gifs/waitMessage.gif" alt="connecting" />
            </div> */}
        </div>
    )
}

export default WaitMessage