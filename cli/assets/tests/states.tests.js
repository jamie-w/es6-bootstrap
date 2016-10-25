import chai, {expect} from 'chai';
import bows from 'bows';
import assetReducer from '../reducers';

let logger = bows('chat.tests.state');

describe('assets', () => {
    let sampleAssets = [
        {
            type: 'img', title: 'Image title goes here',
            href: 'http://thecatapi.com/api/images/get?format=src',
            img_uid: 1,
        },
        {
            type: 'doc', title: 'Document title goes here',
            href: 'http://drive.google.com',
        },
        {
            type: 'link', title: 'The Internet is Under Seige',
            href: 'https://www.schneier.com/blog/archives/2016/09/someone_is_lear.html'
        },
        {
            type: 'note', title: 'A quick doc on how the internet is going astray',
            note_uid: 1,
        }
    ];

    let getSampleAsset = function(index, uid){
        let asset = sampleAssets[index];
        asset.id = uid;
        return asset;
    };

    let getInitialState = function(){
        return [
            {uid: 1, assets: [getSampleAsset(0, 1), getSampleAsset(1, 2)]},
            {uid: 2, assets: [getSampleAsset(0, 3), getSampleAsset(0, 4)]}
        ]
    }

    it('adds a new asset', () => {
        let action = {
            type: 'ADD_ASSET',
            assetListId: 1,
            asset: sampleAssets[2]
        };
        let state = getInitialState();
        let newState = assetReducer(state, action);
        expect(newState[0].assets.length).to.equal(3);
    });

    it('removes an asset', () => {
        let action = {
            type: 'RM_ASSET',
            assetListId:1,
            assetId: 3
        };
        let state = getInitialState();
        let newState = assetReducer(state, action);
        expect(newState[0].assets.length).to.equal(1);
    });
});
