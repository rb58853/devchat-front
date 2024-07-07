import { Link } from 'react-router-dom'
import './styles/desktop.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setWs, setWsConnected, setWsMessages } from '../../redux/websocket/wsSlice'

function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setWs(null))
        dispatch(setWsMessages([]))
        dispatch(setWsConnected(false))

    }, [])

    return (
        <section className="home">
            {/* <Bar/> */}
            <Link to="/chat">
                <button className='button'>
                    New chat
                </button>
            </Link>
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
