import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../components/home/home.jsx';
import Chat from '../components/chat/chat.jsx';
import ProductView from '../components/productView/productView.jsx';

const routes = [
    {
        path: "/",
        element: <App content={<Home />} />,
    },
    {
        path: "/chat",
        element: <App content={<Chat />} />,
    },
    {
        // path: "/product",
        path: "/product/:data",
        element: <App content={<ProductView />} />,
    },
]

export const router = createBrowserRouter(routes)