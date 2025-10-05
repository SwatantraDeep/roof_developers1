import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './app.css'; // Import global styles
createRoot(document.getElementById('root')).render(<App/>);