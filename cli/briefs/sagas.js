import {takeEvery, takeLatest} from 'redux-saga';
import {call, put, fork} from 'redux-saga/effects';

import store from '../store';

import bows from 'bows';

const logger = bows('briefs.saga');

export function* doCreateBrief(action){
    try {
        //var chats = yield put({type: "CREATE_CHAT"});
        store.dispatch({type: 'CREATE_CHAT'});
        let chats = store.getState().chats
        action.brief.chat_uid = chats[chats.length - 1].uid;
        // var assetLists = yield put({type: 'CREATE_ASSET_LIST'});
        store.dispatch({type: 'CREATE_ASSET_LIST'});
        let assetLists = store.getState().assetLists
        logger(assetLists);
        action.brief.assetList_uid = assetLists[assetLists.length - 1].uid;
        // let briefs = yield put({type: 'ADD_BRIEF', brief: action.brief});
        store.dispatch({type: 'ADD_BRIEF', brief: action.brief});
        yield store.getState().briefs
        // yield put({type: "ADD_BRIEF_SUCCESS", action.brief})

    }
    catch(error) {
    }
}

export default function* root(){
    yield [
        fork(yield* takeLatest('CREATE_BRIEF', doCreateBrief)),
    ]
}
