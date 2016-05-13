import chai, {expect} from 'chai';
import bows from 'bows';
import sinon from 'sinon';

import api from '../../api/api';
import userViews from '../../api/users/views';

var logger = bows('test.users.api');

describe('register a user', () => {

    // assign some generic re-usable variables
    let apiStub = sinon.stub(api, 'async'),
        res = { json: data => data },
        username = 'foo',
        password = 'bar',
        req = { body: { username, password }},
        newUser = { username, password };

    // reset the stubbing before each run
    beforeEach(()=> {
        apiStub.restore();
    });

    // the flow if the user already exists
    it('already exists', function(){
        var getUserExists = {
                req: {
                    url: '/users?username='+newUser.username,
                    method: 'get',
                },
                resp: [newUser]
            };

        // only api call - checking user already exists
        // (spoiler: they do)
        apiStub.withArgs(getUserExists.req).returns(getUserExists.resp);

        var view = userViews.register(req, res);
        view.next();
        expect(
            view.next({data: getUserExists.resp}).value
        ).to.deep.equal(
            { errors: 'User already exists' }
        )
    });

    it('is successful', function(){
        var getUserDNE= {
                req: {
                    url: '/users?username='+newUser.username,
                    method: 'get',
                },
                resp: []
            },
            postUser= {
                req: {
                    url: '/users/',
                    method: 'post',
                    params: newUser
                },
                resp: [newUser]
            };

        // first api call, checking user exists
        apiStub.withArgs(getUserDNE.req).returns(getUserDNE.resp);

        // second api call, posting the user
        apiStub.withArgs(postUser.req).returns(postUser.resp);

        var view = userViews.register(req, res);

        view.next();
        view.next({data: getUserDNE.resp});
        expect(
            view.next({data: postUser.resp}).value
        ).to.deep.equal(
            [ newUser, ]
        )
    });
});
