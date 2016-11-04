import {combineReducers} from 'redux';

import bows from 'bows';

var logger = bows("asset.reducers");

const byId = (state={}, action) => {
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
            logger(action, state);
            var assetList = state.byId[action.assetListId];
            assetList.assets.unshift(action.asset);
            return {
                ...state,
                'byId' : {
                    ...state.byId,
                    [action.assetListId]: {
                        ...assetList,
                        'assets': assetList.assets
                    }
                }
            };
        case 'RM_ASSET':
            logger(action, state);
            var assetList = state.byId[action.assetListId],
                assetIndex = assetList.assets.findIndex(a => action.assetId === a.uid);
            assetList.assets.splice(assetIndex, 1);

            return {...state,
                'byId': {
                    ...state.byId,
                    [action.assetListId]:  {
                        ...assetList,
                        'assets': assetList.assets
                    }
                }
            }
        default:
            return state;
    }
}

const allIds = (state, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default combineReducers({
    byId,
    allIds
})
