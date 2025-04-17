import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import for React 18
import './index.css'; // Global styles
import App from './App';

const container = document.getElementById('root'); // Get the root div
const root = createRoot(container); // Create a root for rendering
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);