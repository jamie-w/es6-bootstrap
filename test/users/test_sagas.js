import {expect} from 'chai';
import bows from 'bows';
import {put, call} from 'redux-saga/effects';
import axios from 'axios';

const logger = bows('users.test_sagas');


import {
    doLogin,
    doRegister
} from '../../src/users/sagas';

describe("user sagas", () => {
    let action = {
        type: 'REGISTER',
        username: 'test_user',
        password: 'fake_pass'
    };
    it('makes an api call', () => {
        var saga = doRegister(action);
        expect(
            saga.next().value
        ).to.deep.equal(
            call(axios.post, '/api/users/register', action)
        );
    });
    it("registers a user", () => {
        var saga = doRegister(action);
        let resp = {data: {msg: 'Hello world'}};
        saga.next();

        expect(
            saga.next(resp).value
        ).to.deep.equal(
            put({
                type: 'REGISTER_SUCCESS',
                msg: 'Hello world'
            })
        );
    });

    it("fails to register  a user", () => {
        let saga = doRegister(action);
        let resp = {data: {errors: 'User not found'}};

        saga.next();
        expect(
            saga.next(resp).value
        ).to.deep.equal(
            put({
                type: 'REGISTER_FAIL',
                errors: 'User not found'
            })
        );
    });
});
