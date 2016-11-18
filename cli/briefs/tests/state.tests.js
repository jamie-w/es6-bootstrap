import chai, {expect} from 'chai';
import bows from 'bows';
import {briefReducer} from '../reducers';


let logger = bows('briefs.tests');

describe('briefs', ()=> {
    let state = {
        briefs: { byId:
            {'a-slug': {title: 'A title', slug: 'a-slug', chatId: 1, assetListId: 1}}
        },
        chats: { byId:
            {1 : { uid: 1, msgs: [] }},
        },
        assetLists: { byId:
            {1: {uid: 1, assets: []}}
        }
    };
    it('creates a brief', () => {
        expect(1).to.equal(1);
    });
});
