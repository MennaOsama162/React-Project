import React from 'react';
import ReactDOM from 'react-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/#/' >
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

