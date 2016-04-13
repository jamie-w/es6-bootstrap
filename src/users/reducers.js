import {register, login} from './actions';

export default (state=[], action) => {
    switch(action.type){
        case 'REGISTER':
            return action;
            return register(state, action);
        case 'REGISTER_FAIL':
            return {...state, msg: 'Register failed', errors: action.errors};
        case 'REGISTER_SUCCESS':
            return {...state, msg: 'Register success'};
        case 'LOGIN':
            return login(state, action);
        default:
            return state;
    }
}

