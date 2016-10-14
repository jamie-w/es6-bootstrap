import GLOBALS from './globals';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {sampleBriefs} from './samples';

import DevTools from './devtools';

// App sagas
import userSagas from './users/sagas';

// App reducers
import userReducers from './users/reducers';
import chatReducers from './chat/reducers';
import briefReducers from './briefs/reducers';

const reducers = combineReducers({
    users: userReducers,
    // chats: chatReducers,
    briefs: chatReducers
});

import bows from 'bows';

const logger = bows('store');
logger(GLOBALS);

const initialState = {
    users: {
        currUser: GLOBALS.currUser,
        errors: false,
        msgs: false
    },
    briefs: sampleBriefs
};

export default createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(createSagaMiddleware(userSagas)),
        DevTools.instrument(),
    )
);
