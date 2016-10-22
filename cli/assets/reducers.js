
import bows from 'bows';

var logger = bows("asset.reducers");

export default (state=[], action) => {
    switch(action.type){
        case 'ADD_ASSET':
            var assetListIndex = state.findIndex(c => action.assetListId === c.uid),
                assetList = [...state];
            assetList[assetListIndex].assets.unshift(action.asset);
            return assetList
        case 'RM_ASSET':
            var assetListIndex = state.findIndex(a => action.assetListId === a.uid),
                assetList = [...state],
                assetIndex = assetList[assetListIndex].assets.findIndex(a => action.assetId === a.uid)
            assetList[assetListIndex].assets.splice(assetIndex, 1);
            return assetList
        default:
            return state;
    }
}

