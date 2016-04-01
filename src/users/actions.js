let lastUserId = 0;
export const createUser = (state, username) => {

    let userFound = false, errorMsg = false;
    if(!username)
        errorMsg = 'Username cannot be empty';

    state.userlist.map(user => {
        if(user.username == username)
            errorMsg = 'That user already exists';
    });

    if(errorMsg)
        return Object.assign({}, state, {errorMsg});

    return Object.assign({}, state, {
        errorMsg: '',
        userlist: [
            ...state.userlist,
            {id: ++lastUserId, username}
        ]
    });
}
