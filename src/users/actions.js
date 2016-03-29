let lastId = 0;
export const createUser = (state, username) => {
    return Object.assign({}, state, {
        userlist: [
            ...state.userlist,
            {id: ++lastId, username}
        ]
    });
}
