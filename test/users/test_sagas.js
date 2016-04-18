import {expect} from 'chai';
import bows from 'bows';

const logger = bows('users.test_sagas');

import {
    doLogin,
    doRegister
} from '../../src/users/sagas';

describe("user async", () => {
    it("adds a user", () => {
        let action = {
            type: 'REGISTER',
            username: 'test_user',
            password: 'fake_pass'
        }
        let saga = doRegister(action);
        logger(saga.next().value);
        logger(saga.next().value);
        let newUser = saga.next().value;
        expect(newUser.username).to.equal('test_user');
    });
});
