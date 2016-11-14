import axios from 'axios';

import settings from '../settings/';

/**
 * This is a heavy-handed middleware to generate responses from the store
 * so we can use a local api. In production, there will be a `relay` function
 * on the server that will relay the query to an api in a separate app.
 */

if(settings.test_api){
    export const api = (method, root, data) => function(){
        setTimeout({
            console.log('hitting the test api');
        }, 0);
    }
} else {
    export const api = (method, url, data) => axios[method](url, data);
}
