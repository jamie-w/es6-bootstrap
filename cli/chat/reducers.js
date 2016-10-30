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
            }
            let chats = [...state]
            chats.push(chat);
            return chats;
        case 'SEND_MSG':
            var chatIndex = state.findIndex(c => action.chat_uid === c.uid),
                chats = [...state];
            chats[chatIndex].msgs.push(action.msg);
            return chats
        default:
            return state;
    }
}

