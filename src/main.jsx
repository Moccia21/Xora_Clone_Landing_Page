import React from 'react';
import ReactDOM from 'react-dom';  // Use 'react-dom' instead of 'react-dom/client'
import './index.css';
import App from './App.jsx';

ReactDOM.render(  // Use 'ReactDOM.render' instead of 'createRoot'
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
