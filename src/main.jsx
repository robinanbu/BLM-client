import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/css/index.css';
import {Provider} from 'react-redux'
import store from './redux/store'

createRoot(document.getElementById('root')).render(
    <App />
)
