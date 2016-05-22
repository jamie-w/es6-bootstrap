import {logout} from './actions';

export default (state=[], action) => {
    switch(action.type){
        case 'REGISTER_FAIL':
            return {...state, errors: {register: action.errors}, msgs:false};
        case 'REGISTER_SUCCESS':
            return {...state, errors: false, msgs: {register: action.msg}};
        case 'LOGIN_FAIL':
            return {...state, errors: {login: action.errors}, msgs:false};
        case 'LOGIN_SUCCESS':
            return {...state, errors: false, msgs: false, currUser: action.user};
        case 'LOGOUT':
            return logout(state);
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

