import chai, {expect} from 'chai';
import bows from 'bows';

import userViews from '../../api/users/views';

var logger = bows('test.users.api');

describe('register a user', () => {

    // assign some generic re-usable variables
    let res = { json: data => data },
        username = 'foo',
        password = 'bar',
        req = { body: { username, password }},
        newUser = { username, password };


    // the flow if the user already exists
    it('already exists', function(){
        var getUserExists = {
                req: {
                    url: '/users?username='+newUser.username,
                    method: 'get',
                },
                resp: [newUser]
            };

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
