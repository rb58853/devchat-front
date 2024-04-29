import { createHashRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../components/home/home.jsx';

const routes = [
    {
        path: "/",
        element: <App content={<Home />} />,
    },
]

export const router = createHashRouter(routes)