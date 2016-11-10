import {Model, oneToOne} from 'redux-orm';

export default class Brief extends Schema {
    reducer(state, action){
        switch(action.type){
            case 'CREATE':
                Brief.create(action)
            break;
        }
    }
}
