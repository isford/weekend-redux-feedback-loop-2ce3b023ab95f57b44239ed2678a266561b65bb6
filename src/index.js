import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//REDUCERS TIME
const surveyList = (state = [], action) => {
    if (action.type === 'SET_RESPONSE') {
        return [...state,action.payload]
    }
    return state;
}

const store = createStore(
    combineReducers({
        surveyList
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store = {store}>
                    <App />
                </Provider>
    , document.getElementById('root'));
registerServiceWorker();
