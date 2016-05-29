/*
 * Mostly used after sagas have been called to produce the
 * desired side-effects.
*/

import { browserHistory } from 'react-router'
import bows from 'bows';

const logger = bows('users.reducers');

export default (state=[], action) => {
    switch(action.type){
        case 'REGISTER_FAIL':
            return {...state, errors: {register: action.errors}, msgs:false};
        case 'REGISTER_SUCCESS':
            return {...state, errors: false, msgs: {register: action.msg}};
        case 'ADD_NEXT_URL':
            logger("hello ADD_NEXT_URL", action);
            return {...state, nextUrl: action.nextUrl};
        case 'LOGIN_FAIL':
            return {...state, errors: {login: action.errors}, msgs:false};
        case 'LOGIN_SUCCESS':
            browserHistory.push(state.nextUrl);
            return {...state, errors: false, msgs: false, currUser: action.user, nextUrl: false};
        case 'LOGOUT_SUCCESS':
            return {...state, currUser: false};
        case 'ADD_USER':
            return {...state,
                userlist:[
                    ...state.userlist,
                    action.user
                ]
            }
        default:
            return state;
    }
}

