import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from './Register(FEF_React.M.A0204)';
import TodoAPP from './To-doApp(FEE_React.M.A0201)';
import List from './List(FEF_React.M.A0204)';
import TableApp from './TableApp(FEE_React.M.A0601)';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

ReactDOM.render(
    <React.StrictMode >
        <List />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();