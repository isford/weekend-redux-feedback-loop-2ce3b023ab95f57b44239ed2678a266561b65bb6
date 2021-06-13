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
//     if (action.type === 'SET_RESPONSE') {
//         return [...state,action.payload]
//     }
//     if(action.type === 'EMPTY'){
//         return [];
//     }else
//     return state;
// }

switch(action.type){
    case 'SET_FEELING':
        return [...state, action.payload];
    case 'SET_SUPPORTED':
        return [...state, action.payload];
    case 'SET_UNDERSTANDING':
        return [...state, action.payload];
    case 'SET_COMMENTS':
        return [...state, action.payload];
    case 'EMPTY':
        return [];
    default:
        return state;
}}

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
