import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './component/reportWebVitals.js';

import './index.css';
import App from './component/App.jsx';
import Deposit from './component/deposit.jsx';
import Card from './component/business card.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Deposit/>
    <Card/>
  </React.StrictMode>
);

reportWebVitals();
