import GLOBALS from './globals';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, Link, browserHistory} from 'react-router';
import axios from 'axios';

import App from './app';
import NotFound from './notfound';
import DevTools from './devtools';

import store from './store';


axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-Token': GLOBALS.csrfToken
};

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={browserHistory}>
                <Route path="/" component={App}/>
                <Route path="*" component={NotFound}/>
            </Router>
            <DevTools/>
        </div>
    </Provider>,
    document.getElementById('root')
);
