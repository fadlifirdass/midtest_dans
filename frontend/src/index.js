import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bulma/css/bulma.css"
import axios from "axios";
import { createStore } from "redux"
import counter from './redux/reducer';
axios.defaults.withCredentials = true;

let store = createStore(counter)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


