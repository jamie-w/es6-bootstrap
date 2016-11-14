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

export const briefReducer = (state={}, action) => briefsById(state.byId, action);
