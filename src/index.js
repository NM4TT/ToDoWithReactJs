import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './js/App';
import { TodoProvider } from './js/TodoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TodoProvider>
        <App />
    </TodoProvider>
);
