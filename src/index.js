import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Bootstrap JQuery Popper & BootstrapJS
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "@popperjs/core/dist/umd/popper.min.js"
import "bootstrap/dist/js/bootstrap.min.js";

// React Router Dom
import { HashRouter } from 'react-router-dom';

// Axios
import axios from "axios";

//Test Database
// axios.defaults.baseURL = 'http://localhost:8080/';

//Deploy Database
axios.defaults.baseURL = 'https://63fef37cc5c800a72388710e.mockapi.io/hcmokc/';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
