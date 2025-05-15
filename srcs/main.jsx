import RouterApp from './router';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <RouterApp />
        </BrowserRouter>
    </StrictMode>
);