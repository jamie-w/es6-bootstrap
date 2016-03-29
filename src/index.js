import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';

import DevTools from './devtools';

// App reducers
import userReducers from './users/reducers';
import chatReducers from './chat/reducers';

import App from './app';

import {userlist} from './data';

const reducers = combineReducers({
    users: userReducers,
    chats: chatReducers
});

let store = createStore(
    reducers,
    {
        users: {
            userlist: []
        }
    },
    compose(
        DevTools.instrument()
    )
);
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
