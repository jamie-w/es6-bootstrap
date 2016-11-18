import {getStore} from 'redux';
import {errors} from '../errors';
import {slugify} from '../utils';

function findMax(objs){
    if(!objs) return false;
    var max = 0;
    for(var i in objs){
        if(obj.uid > max) max = obj.uid;
    }
    return objs[max];
}

export const create = (data) => {
    if(method !== 'post'){
        return { errors: [errors.INVALID_REQUEST_TYPE] };
    }
    var store = getStore();
    var prevChatId = findMax(store.chats.byId)
    var prevAssetListId = findMax(store.assetLists.byId)
    const brief = {
        title: data.title,
        slug: slugify(data.title),
        members: [],
        chatId:  prevChatId ? prevChatId.uid + 1 : 1,
        assetListId: prevAssetListId ? prevAssetListId.uid + 1 : 1,
    };
}
