import './styles/desktop.css'
function WaitMessage() {
    return (
        <div className="waitMessage">

            <img className='waitMessageFloat' src="/gifs/waitMessage.gif" alt="connecting"
                style={{ width: "70px", height: "70px", placeSelf: 'center', alignSelf: 'center' }} />
        </div>
    )
}

export default WaitMessage