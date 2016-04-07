import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, Link, browserHistory} from 'react-router';

import DevTools from './devtools';

// App reducers
import userReducers from './users/reducers';
import chatReducers from './chat/reducers';

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
        DevTools.instrument()
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
