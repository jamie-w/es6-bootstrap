import chai, {expect} from 'chai';
import bows from 'bows';
import sinon from 'sinon';

import api from '../../api/api';
import userViews from '../../api/users/views';

var logger = bows('test.users.api');

describe('users api', () => {
    it('pings /users', () => {
        var req = {
            body: {
                username: 'foo',
                password: 'bar'
            }
        }
        var apiStub = sinon.stub(api, 'async');
        apiStub
            .onCall({url: '/users?username=foo', method:'get'})
            .returns({data: { username: 'foo'}});
        var view = userViews.register(req);
        logger(view);
        logger(view.next(req));
        logger(view.next(apiStub));

        //expect(1).to.equal(0);
    });
    /*it('register only accepts POST', () => {
        chai.request(server)
            .post('/api/users/register')
            .then((res) => {
                logger(res.statusCode);
                logger(res.data);
                expect(res).to.have.status(404);
                done();
            });
    });*/
});
