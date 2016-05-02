import chai, {expect} from 'chai';
import server from '../../server';
import bows from 'bows';

var logger = bows('test.users.api');

describe('users api', () => {
    it('pings /users', () => {
        chai.request(server)
            .get('/api/users')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res.statusCode).to.equal(404);
            });
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
