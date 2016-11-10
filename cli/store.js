import GLOBALS from './globals';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Schema} from 'redux-orm';

import {sampleBriefs, sampleChats, sampleAssetLists} from './samples';

import DevTools from './devtools';

// App sagas
import userSagas from './users/sagas';
import briefSagas from './briefs/sagas';

// App reducers
// import userReducers from './users/reducers';
// import chatReducers from './chat/reducers';
// import briefReducers from './briefs/reducers';
// import assetReducers from './assets/reducers';

// Schemas
import {User} from './users/models';
import {Brief} from './briefs/models';
import {Chat, Msg} from './chat/models';
import {AssetList, Asset} from './assets/models';

const schema = new Schema();
schema.register(
    User,
    Brief,
    Chat, Msg,
    AssetList, Asset
);

const reducers = combineReducers({
    jwjs: schema.reducer()
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
