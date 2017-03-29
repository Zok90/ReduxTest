import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { allReducers } from './reducers';
import App from './components/App';

// lo STORE è il più grande oggetto che mi contiene tutti i dati del mio sito
// provenienti dai reducer, che a sua volta vengono alterati/manipolati dalle azioni

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// il Provider serve per dare l'accesso dei nostri componenti ai dati del nostro STORE

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>
    , document.getElementById('root'));
