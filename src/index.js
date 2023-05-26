import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const root = document.querySelector('#root');
const renderRoot = ReactDOM.createRoot(root);

renderRoot.render(<App/>);