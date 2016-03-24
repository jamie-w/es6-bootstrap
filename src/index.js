import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// App reducers
import userReducers from './users/reducers';
import chatReducers from './chat/reducers';

import App from './app';

import {userlist} from './data';

const reducers = combineReducers({
    users: userReducers, chats: chatReducers
});

const initialState = { users: [] };

let store = createStore(reducers, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
