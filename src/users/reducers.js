import {register, login} from './actions';

export default (state=[], action) => {
    switch(action.type){
        case 'REGISTER_FAIL':
            return {...state, registerErrorMsg: action.errors};
        case 'REGISTER_SUCCESS':
            return {...state, registerSuccessMsg: action.msg};
        case 'LOGIN_FAIL':
            return {...state, loginErrorMsg: action.errors};
        case 'LOGIN_SUCCESS':
            return {...state, currUser: action.username};
        default:
            return state;
    }
}

