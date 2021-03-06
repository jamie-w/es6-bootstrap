import chai, {expect} from 'chai';
import bows from 'bows';
import chatReducer from '../reducers';

var logger = bows('chat.tests.state');

describe('chat', () => {
    var state = [
        {uid: 1, msgs: ['chat1, msg1', 'chat1, msg2']},
        {uid: 2, msgs: ['chat2, msg1', 'chat2, msg2']}
    ];

    it('sends a message to the store', () => {
        var action = {
            type: 'SEND_MSG',
            msg: 'chat2, msg3',
            chat_uid: 2
        }
        var newState = chatReducer(state, action);
        expect(newState[1].msgs.length).to.equal(3);
    });
});
