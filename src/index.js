import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, Link, browserHistory} from 'react-router';
import {sagaMiddleware} from 'redux-saga';

import DevTools from './devtools';

// App reducers
import userReducers from './users/reducers';
import chatReducers from './chat/reducers';

import userSagas from './users/sagas';

import App from './app';
import NotFound from './notfound';

const reducers = combineReducers({
    users: userReducers,
    chats: chatReducers
});

let store = createStore(
    reducers,
    {
        users: {
            userlist: [],
            currUser: false
        }
    },
    compose(
        applyMiddleware(createSagaMiddleware(userSagas)),
        DevTools.instrument(),
    )
);
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path="*" component={NotFound}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
