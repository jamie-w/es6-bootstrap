import bows from 'bows';
import {combineReducers} from 'redux';
import {reduceById} from '../utils';

var logger = bows("chat.reducers");

const chatsById = (state={}, action) => {
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

export const chatReducer = combineReducers({byId: chatsById});

const msgsById = (state = {}, action) => {
    switch(action.type){
        case 'ADD_MSG':

            return {
                ...state,
                [msg.uid]: action.msg
            };
        default:
            return state;
    }
}

export const msgReducer = (state={}, action) => msgsById({byId: state.byId}, action);
