import axios from 'axios';
import {takeEvery, takeLatest} from 'redux-saga';
import {call, put} from 'redux-saga/effects';


export default *() => {
    const params = yield* takeEvery('REGISTER');
    try
    {
        yield call(axios.post, '/api/users/register', params);
        yield put({type: 'REGISTER_SUCCESS', error});
    }
    catch(error)
    {
        yield put({type: 'REGISTER_FAIL', error});
    }
}


