import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Asigură-te că ai un fișier CSS global (opțional)

// Creează un root pentru aplicație
const root = ReactDOM.createRoot(document.getElementById('root'));

// Randăază componenta App în root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);