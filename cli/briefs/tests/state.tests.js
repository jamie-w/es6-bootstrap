import chai, {expect} from 'chai';
import bows from 'bows';
import {briefReducer} from '../reducers';
import {put, call} from 'redux-saga/effects';
import api from '../../api';
import {doCreateBrief} from '../sagas';

let logger = bows('briefs.tests');

describe('briefs', ()=> {
    function getInitialState(){
        return {
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
    };
    it('creates a brief', () => {
        var initialState = getInitialState(),
            action = {title: 'A new brief'},
            resp = {
                title: action.title,
                slug: 'a-new-brief',
                members: [],
                chatId:  2,
                assetListId: 2,
            };
        var saga = doCreateBrief(action),
            iter1 = saga.next(resp),
            iter2 = saga.next();
        // logger(iter1);
        expect(
            iter1.value
        ).to.deep.equal(
            call(api.post, '/api/briefs/create', action)
        );
        // logger(iter2);
        expect(iter2.done).to.equal(true);
    });
});
