import bows from 'bows';

var logger = bows("chat.reducers");

export default (state={}, action) => {
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
                'byId': {
                    ...state.byId,
                    [chat.uid]: chat
                }
            };
        case 'SEND_MSG':
            logger(state, action)
            var chat = state.byId[action.chatId];
            chat.msgs.push(action.msg);
            return {
                ...state,
                'byId': {
                    ...state.byId,
                    [chat.uid]: {
                        ...chat,
                        'msgs': chat.msgs
                    }
                }
            }
        default:
            return state;
    }
}

