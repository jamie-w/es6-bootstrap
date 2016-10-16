import bows from 'bows';

var logger = bows("chat.reducers");

export default (state=[], action) => {
    switch(action.type){
        case 'SEND_MSG':
            logger(state, action);
            var chatIndex = state.findIndex(c => action.chat_uid === c.uid),
                chats = state;
            chats[chatIndex].msgs.push(action.msg);
            return chats
        default:
            return state;
    }
}

