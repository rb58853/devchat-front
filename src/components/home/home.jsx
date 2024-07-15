import { Link } from 'react-router-dom'
import './styles/desktop.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setDebug, setWs, setWsConnected, setWsMessages } from '../../redux/websocket/wsSlice'

function Home() {
    const dispatch = useDispatch()
    const ws = useSelector((state) => state.ws).ws

    useEffect(() => {
        if (ws) {
            ws.close();
        }
        dispatch(setWs(null))
        dispatch(setWsMessages([]))
        dispatch(setWsConnected(false))
        dispatch(setDebug(false))
    }, [dispatch,ws])

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

export default Home
