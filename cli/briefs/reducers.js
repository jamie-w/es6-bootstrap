export default (state=[], action) => {
    switch(action.type) {
        case 'ADD_BRIEF':
            var briefs = [...state],
                newBrief = action.brief;
            newBrief.uid = briefs.length + 1;
            briefs.push(newBrief);
            return briefs;
        default:
            return state;
    }
}
