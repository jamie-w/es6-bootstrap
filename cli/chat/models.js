import {Model, fk} from 'redux-orm';

class Chat extends Model {
    reducer(state, action){
        switch(action.type){
            case 'CREATE':
                Chat.create(action)
            break;
        }
    }
}

class Msg extends Model {
}

export {Chat, Msg}
