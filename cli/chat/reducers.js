import bows from 'bows';
import {combineReducers} from 'redux';

var logger = bows("chat.reducers");

const chatsById = (state, action) => {
    switch(action.type){
        case 'CREATE_CHAT':
            var chat = {
                uid: state.length + 1,
                msgs: [],
                alerts: 0,
                hasUnread: false
            };
            return {
                ...state,
                [chat.uid]: chat
            };
        case 'SEND_MSG':
            var chat = state[action.chatId];
            chat.msgs.push(action.msg);
            return {
                ...state,
                [chat.uid]: {
                    ...chat,
                    'msgs': chat.msgs
                }
            }
        default:
            return state;
    }
}

const allChatIds = (state, action) => {
    return state;
}

export default (state, action) => ({
    byId: chatsById(state, action),
    allIds: allChatIds(state, action)
})
