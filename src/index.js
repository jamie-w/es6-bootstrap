import GLOBALS from './globals';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, Link, browserHistory} from 'react-router';
import axios from 'axios';

import store from './store';

import NotFound from './notfound';
import DevTools from './devtools';

import App from './app';
import Account from './users/components/account';


axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-Token': GLOBALS.csrfToken
};

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={browserHistory}>
                <Route path="/" component={App}/>
                <Route path="/account" component={Account}/>
                <Route path="*" component={NotFound}/>
            </Router>
            <DevTools/>
        </div>
    </Provider>,
    document.getElementById('root')
);
