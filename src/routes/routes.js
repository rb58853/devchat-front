import { createHashRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../components/home/home.jsx';
import Chat from '../components/chat/chat.jsx';

const routes = [
    {
        path: "/",
        element: <App content={<Home />} />,
    },
    {
        path: "/chat",
        element: <App content={<Chat />} />,
    },
    // {
    //     path: "/products",
    //     element: <App content={<Products />} />,
    // },
]

export const router = createHashRouter(routes)