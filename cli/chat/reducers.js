import bows from 'bows';

var logger = bows("chat.reducers");

export default (state=[], action) => {
    switch(action.type){
        case 'SEND_MSG':
            logger(state);
            var briefIndex = state.findIndex(b => b.title == action.brief_title);
            state[briefIndex].msgs.push(action.msg);
            logger(state);
            return [...state]
        default:
            return state;
    }
}

