import { Link } from 'react-router-dom'
import './styles/desktop.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setDebug, setIndexStore, setStore, setWs, setWsConnected, setWsMessages } from '../../redux/websocket/wsSlice'

const stores = ['test_data', 'padel_store', 'padel_store_gpt']

function Home() {
    const dispatch = useDispatch()
    const debug = useSelector((state) => state.ws).debug
    const store = useSelector((state) => state.ws).store
    const indexStore = useSelector((state) => state.ws).indexStore
    const ws = useSelector((state) => state.ws).ws

    useEffect(() => {
        if (ws) {
            ws.close();
        }
        dispatch(setWs(null))
        dispatch(setWsMessages([]))
        dispatch(setWsConnected(false))
        // dispatch(setDebug(false))
    }, [dispatch, ws])

    return (
        <section className="home">
            <h1 className='storeName'>
                {store}
            </h1>

            <div className='homeButtons'>
                <button className={`buttonDebug ${debug ? 'active' : ''}`}
                    onClick={() => {
                        dispatch(setDebug(!debug))
                    }}>
                    {`DEBUG ${debug ? '✔️' : '❌'}`}
                </button>

                <button className={`buttonDebug active`}
                    onClick={() => {
                        dispatch(setIndexStore((indexStore + 1) % 3))
                        dispatch(setStore(stores[indexStore]))
                    }}>
                    next
                </button>

            </div>

            <Link to="/chat">
                <button className='button'>
                    New chat
                </button>
            </Link>
        </section>
    )
}

export default Home
