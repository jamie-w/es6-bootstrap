import chai, {expect} from 'chai';
import bows from 'bows';

import {userReducer} from '../reducers';

var logger = bows('test.users.states');

describe("user states", () => {
    it('adds a user', () => {
        var state = {userlist: []};
        var action = {
            type: 'ADD_USER',
            user: {
                username: 'foo',
                password: 'bar'
            }
        };
        var newState = userReducer(state, action);
        expect(newState.userlist.length).to.equal(1);
    });
});
