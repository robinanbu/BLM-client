import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/css/index.css';
import { StrictMode } from 'react';

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
} else {
    console.error('Root element not found');
}
