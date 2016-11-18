import {getStore} from 'redux';

function findMax(objs){
    var max = 0;
    for(var i in objs){
        if(obj.uid > max) max = obj.uid;
    }
    return objs[max];
}

export const create = (method, data) => {
    if(method !== 'post'){
        return { errors: ['Invalid method'] };
    }
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
