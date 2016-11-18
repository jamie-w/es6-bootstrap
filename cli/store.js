import GLOBALS from './globals';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {sampleBriefs, sampleChats, sampleAssetLists} from './samples';

import DevTools from './devtools';

// App sagas
import userSagas from './users/sagas';
import briefSagas from './briefs/sagas';

// App reducers
import {userReducer} from './users/reducers';
import {chatReducer, msgReducer} from './chat/reducers';
import {briefReducer} from './briefs/reducers';
import {assetListReducer} from './assets/reducers';

const reducers = combineReducers({
    users: userReducer,
    chats: chatReducer,
    briefs: briefReducer,
    assetLists: assetListReducer
});

import bows from 'bows';

const logger = bows('store');

logger(GLOBALS);

const initialState = process.env.NODE_ENV == 'test' ? undefined : {
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
