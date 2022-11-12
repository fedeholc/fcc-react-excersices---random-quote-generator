import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 /* También se puede escribir así:
 
 ReactDOM.render(<App />, document.getElementById("root")); 
 
 */