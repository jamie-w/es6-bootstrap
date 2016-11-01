import bows from 'bows';

var logger = bows("chat.reducers");

export default (state=[], action) => {
    switch(action.type){
        case 'CREATE_CHAT':
            let chat = {
                uid: state.length + 1,
                msgs: [],
                alerts: 0,
                hasUnread: false
            };
            let chats = {...state}
            chats.byId[chat.uid] = chat;
            return chats;
        case 'SEND_MSG':
            var chats = {...state};
            chats.byId[action.chatId].msgs.push(action.msg);
            return chats
        default:
            return state;
    }
}

