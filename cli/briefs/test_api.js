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
    const brief = {
        title: data.title,
        slug: slugify(data.title),
        members: [],
        chatId: findMax(store.chats.byId).uid + 1,
        assetListId: findMax(store.assetLists.byId).uid + 1,
    };
}
