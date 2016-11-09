import {combineReducers} from 'redux';

import bows from 'bows';

var logger = bows("asset.reducers");

const assetListById = (state, action) => {
    switch(action.type){
        case 'CREATE_ASSET_LIST':
            var assetLists = {...state},
                newId = state.length + 1;
            assetLists[newId] = {
                uid: newId,
                assets: []
            }
            return assetLists;
        case 'ADD_ASSET':
            var assetList = state[action.assetListId];
            assetList.assets.unshift(action.asset);
            return {
                ...state,
                [action.assetListId]: {
                    ...assetList,
                    'assets': assetList.assets
                }
            };
        case 'RM_ASSET':
            var assetList = state[action.assetListId],
                assetIndex = assetList.assets.findIndex(a => action.assetId === a.uid);
            assetList.assets.splice(assetIndex, 1);

            return {...state,
                [action.assetListId]:  {
                    ...assetList,
                    'assets': assetList.assets
                }
            }
        default:
            return state;
    }
}


const allAssetListIds = (state, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default (state={}, action) => ({
    byId: assetListById(state.byId, action),
    allIds: allAssetListIds(state.allIds, action)
})
