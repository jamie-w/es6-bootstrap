import chai, {expect} from 'chai';
import server from '../../server';
import bows from 'bows';

var logger = bows('test.users.api');

describe('users api', () => {
    it('pings /users', () => {
        chai.request(server)
            .get('/api/users')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
            });
    });
    it('register only accepts POST', () => {
        /*chai.request(server)
            .post('/api/users/register')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
            });*/
        chai.request(server)
            .get('/api/users/register')
            .end((err, res) => {
                logger(res.statusCode);
                expect(res.statusCode).to.equal(404);
            });
    });
});
