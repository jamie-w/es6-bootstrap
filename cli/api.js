import axios from 'axios';
import {getStore} from 'redux';
import bows from 'bows';

import settings from '../settings';

var logger = bows('cli.api');

/**
 * This is a heavy-handed middleware to generate responses from the store
 * so we can use a dynamic local api. In production, there will be a `relay` function
 * on the server that will relay the query to an api in a separate app.
 */
function mockPost(url, data){
    logger(url, data);
    return setTimeout(() => {
        var [app, view] = url.replace(/^\/api\/(\S+)\/?$/, '$1').split('/')
        logger(app, view);
        var appCmp = require(`./${app}/test_api`);
        logger(appCmp);
        logger(appCmp[view]);
        appCmp[view]('post', data);
    }, 0)
}

const mockApi = {
    post: mockPost
}

const Api = !settings.TEST_API ? axios : mockApi;

export default Api
