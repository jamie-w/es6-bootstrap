import axios from 'axios';
import {takeEvery, takeLatest} from 'redux-saga';
import {call, put} from 'redux-saga/effects';

import bows from 'bows';

const logger = bows('users.sagas');

/**
    Simple api connection 'adding a user'. Basic set of tests for
    sagas.
*/
function* doRegister(action) {
    try {
        var resp = yield call(axios.post, '/api/users/register', action);
        if(resp.data.errors)
            yield put({type: 'REGISTER_FAIL', errors: resp.data.errors});
        else
            yield put({type: 'REGISTER_SUCCESS', username: resp.data.user.username});
    } catch(error) {
        yield put({type: 'REGISTER_FAIL', error});
    }
}

export default function* root(){
    logger("watching doRegister");
    yield* takeEvery('REGISTER', doRegister);
}
