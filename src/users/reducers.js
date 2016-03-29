import {createUser} from './actions';

export default function reducer(state=[], action) {
    switch(action.type){
        case 'CREATE_USER':
            return createUser(state, action.username);
        default:
            return state;
    }
}

