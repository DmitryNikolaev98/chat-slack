import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('chat'));
root.render(<App />);
