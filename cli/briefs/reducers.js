import {combineReducers} from 'redux';

const briefsById = (state={}, action) => {
    switch(action.type) {
        case 'ADD_BRIEF':
            var briefs = [...state],
                newBrief = action.brief;
            newBrief.uid = briefs.length + 1;
            briefs[newBrief.uid] = newBrief;
            return briefs;
        default:
            return state;
    }
}


const allBriefsById = (state=[], action) => {
    switch(action.type){
        case 'ADD_BRIEF':
        default:
            return state;
    }
}

export default (state={}, action) => ({
    byId: briefsById(state.byId, action),
    allIds: allBriefsById(state.allIds, action)
})
