// src/main.jsx - NO BrowserRouter!
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './Context/AuthContext';  // ONLY AuthProvider
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>    {/* Wraps your App with auth context */}
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
