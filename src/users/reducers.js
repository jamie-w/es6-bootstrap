import {register, login} from './actions';

export default (state=[], action) => {
    switch(action.type){
        case 'REGISTER_FAIL':
            return {...state, errors: {register: action.errors}, msgs:false};
        case 'REGISTER_SUCCESS':
            return {...state, errors: false, msgs: {register: action.msg}};
        case 'LOGIN_FAIL':
            return {...state, errors: {login: action.errors}, msgs:false};
        case 'LOGIN_SUCCESS':
            return {...state, errors: false, msgs: false, currUser: action.username};
        default:
            return state;
    }
}

