import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Header from './components/Header/Header';
import * as serviceWorker from './serviceWorker';
import { Reset } from 'styled-reset'


ReactDOM.render(
    <React.Fragment>
        <Reset />
        <Header />
        <App />
    </React.Fragment>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
