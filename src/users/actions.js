import bows from 'bows';

let logger = bows("users.actions");
let lastUserId = 0;

/**
    Not currently used because of redux-saga development
*/
export const register = (state, action) => {

    let userFound = false, registerErrorMsg = false,
        username = action.username,
        password = action.password;

    if(!username)
        registerErrorMsg = 'Username cannot be empty';

    state.userlist.map(user => {
        if(user.username == username)
            registerErrorMsg = 'That user already exists';
    });

    if(registerErrorMsg)
        return Object.assign({}, state, {registerErrorMsg});

    return Object.assign({}, state, {
        registerErrorMsg: '',
        userlist: [
            ...state.userlist,
            {id: ++lastUserId, username, password}
        ]
    });
}

export const login = (state, action) => {

    let foundUser=false, loginErrorMsg='',
        username = action.username,
        password = action.password;

    if(!username || !password)
        loginErrorMsg = "Please enter a username and password.";

    else {
        state.userlist.map(user => {
            logger("comparing username", user.username, username);
            logger("comparing password", user.password, password);
            if(user.username == username && user.password==password){
                return foundUser = true;
            }
        });
    }
    logger("foundUser", foundUser);
    if(!foundUser) loginErrorMsg = 'User not found.';

    if(loginErrorMsg)
        return Object.assign({}, state, {loginErrorMsg});

    return Object.assign({}, state, {
        loginErrorMsg: '',
        currUser: username
    });
}
