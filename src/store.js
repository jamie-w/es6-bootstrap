import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import DevTools from './devtools';

// App sagas
import userSagas from './users/sagas';

// App reducers
import userReducers from './users/reducers';
import chatReducers from './chat/reducers';

const reducers = combineReducers({
    users: userReducers,
    chats: chatReducers
});

const initialState = {
    users: {
        userlist: [],
        currUser: JSON.parse(localStorage.getItem('currUser')),
        errors: false,
        msgs: false
    }
};

export default createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(createSagaMiddleware(userSagas)),
        DevTools.instrument(),
    )
);
