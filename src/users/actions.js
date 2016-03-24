export const createUser = (state, username) => {
    console.log("In actions.js", state, username);
    if(typeof state.users == 'undefined') state.users = [];
    console.log(state.users);
    state.users.push({username});
    return state;
}
