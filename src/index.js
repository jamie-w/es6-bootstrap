import settings from '../settings';
import GLOBALS from './globals';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import axios from 'axios';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app';
import store from './store';


injectTapEventPlugin();

axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-Token': GLOBALS.csrfToken
};



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
