import {errors} from '../errors';
import {slugify} from '../utils';
import store from '../store';

const logger = require('bows')('briefs.test_api');


function findMax(objs){
    if(!objs) return false;
    var max = 0;
    for(var i in objs){
        if(objs[i].uid > max) max = objs[i].uid;
    }
    return objs[max];
}

export const create = (method, payload) => {
    if(method !== 'post'){
        return { errors: [errors.INVALID_REQUEST_TYPE] };
    }
    logger(payload);
    let state = store.getState();
    var prevChatId = Math.max(Object.keys(state.chats.byId))
    var prevAssetListId = Math.max(Object.keys(state.assetLists.byId))
    const brief = {
        title: payload.title,
        slug: slugify(payload.title),
        members: [],
        chatId:  prevChatId ? prevChatId.uid + 1 : 1,
        assetListId: prevAssetListId ? prevAssetListId.uid + 1 : 1,
    };
}
