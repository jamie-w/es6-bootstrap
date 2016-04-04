import {register, login} from './actions';

export default (state=[], action) => {
    switch(action.type){
        case 'REGISTER':
            return register(state, action);
        case 'LOGIN':
            return login(state, action);
        default:
            return state;
    }
}

