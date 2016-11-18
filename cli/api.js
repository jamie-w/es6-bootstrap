import axios from 'axios';
import {getStore} from 'redux';

import settings from '../settings';

/**
 * This is a heavy-handed middleware to generate responses from the store
 * so we can use a local api. In production, there will be a `relay` function
 * on the server that will relay the query to an api in a separate app.
 */

let Api = {};

let store = process.env.NODE_ENV == 'test' ? {} : getStore();

if(settings.test_api){
     function *mockCall(){
        return setTimeout((method, url, data) => {
            let {app, view} = url.split('/')
            logger(app, view);
            return require(`./${app}/test_api/`).view(method, data);
        }, 0)
    }
    Api.post = mockCall, Api.put = mockCall;
} else {
    Api = function*(method, url, data) { return axios[method](url, data); }
}

export default Api
