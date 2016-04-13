import {register, login} from './actions';

export default (state=[], action) => {
    switch(action.type){
        case 'REGISTER':
            return {...state, registerParams: {
                username: action.username,
                password: action.password
            }};
        case 'REGISTER_FAIL':
            return {...state, registerErrorMsg: action.errors};
        case 'REGISTER_SUCCESS':
            return {...state, currUser: action.username};
        case 'LOGIN':
            return login(state, action);
        default:
            return state;
    }
}

