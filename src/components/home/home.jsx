import { Link } from 'react-router-dom'
import './styles/desktop.css'

function Home() {
    return (
        <section className="home">
            {/* <Bar/> */}
            {/* <Chat /> */}
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
