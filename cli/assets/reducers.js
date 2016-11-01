
import bows from 'bows';

var logger = bows("asset.reducers");

export default (state=[], action) => {
    switch(action.type){
        case 'CREATE_ASSET_LIST':
            var assetLists = {...state},
                newId = state.byId.length + 1;
            assetLists.byId[newId] = {
                uid: newId,
                assets: []
            }
            return assetLists;
        case 'ADD_ASSET':
            var assetList = {...state};
            assetList.byId[action.assetListId].assets.unshift(action.asset);
            return assetList
        case 'RM_ASSET':
            var assetList = {...state},
                assetIndex = assetList.byId[action.assetListId].assets.findIndex(a => action.assetId === a.uid);
            assetList.byId[action.assetListId].assets.splice(assetIndex, 1);
            return assetList
        default:
            return state;
    }
}

