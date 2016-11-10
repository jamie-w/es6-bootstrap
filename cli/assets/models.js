import {Model, fk} from 'redux-orm';

export class AssetList extends Model{
    reducer(state, action){
        switch(action.type){
            case 'CREATE':
                AssetList.create(action)
            break;
        }
    }
}

export class Asset extends Model {
}
