import GLOBALS from './globals';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {sampleBriefs, sampleChats, sampleAssetLists} from './samples';

import DevTools from './devtools';

// App sagas
import userSagas from './users/sagas';
import briefSagas from './briefs/sagas';

// App reducers
import userReducers from './users/reducers';
import chatReducers from './chat/reducers';
import briefReducers from './briefs/reducers';
import assetReducers from './assets/reducers';

const reducers = combineReducers({
    users: userReducers,
    chats: chatReducers,
    briefs: briefReducers,
    assetLists: assetReducers
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
    briefs: sampleBriefs,
    chats: sampleChats,
    assetLists: sampleAssetLists,
};

const sagaMiddleware = createSagaMiddleware();

logger(initialState);

const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(sagaMiddleware),
        DevTools.instrument(),
    )
);

sagaMiddleware.run(userSagas);
sagaMiddleware.run(briefSagas);

export default store
