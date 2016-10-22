
import bows from 'bows';

var logger = bows("asset.reducers");

export default (state=[], action) => {
    switch(action.type){
        case 'ADD_ASSET':
            logger(action, action.asset, state);
            var assetListIndex = state.findIndex(c => action.assetListId === c.uid),
                assetList = [...state];
            assetList[assetListIndex].assets.push(action.asset);
            return assetList
        default:
            return state;
    }
}

