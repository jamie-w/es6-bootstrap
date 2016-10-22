
var msgs = [
    'An arriving trade sneaks throughout the rage.',
    'The buffer scratches the anarchy.',
    'The cider employs the pleasure.',
    'Throughout a kidnaped bookshop migrates an overlooked intellectual.',
    'Its expanding change depresses a wound past the wild variant.',
    'Why does a characteristic farm past the fly mystery? Above the symphony leaps the precedent.',
    'A stereo rewards a romance.',
]

function shuffle(arr, len){
    var new_arr = [];
    while(new_arr.length < len){
        var lineLen = Math.floor(Math.random() * 6);
        var i = 0;
        var msg = '';
        while(i < lineLen){
            msg += arr[Math.floor(Math.random() * arr.length)] + (i == lineLen - 1 ? '' : ' ');
            i++;
        }
        new_arr.push(msg);
    }
    return new_arr;
}

function buildAssets(total){
    var sampleAssets = [
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
        ],
        assets = [];
    while(assets.length < total){
        var asset = sampleAssets[Math.floor(Math.random() * 4)];
        asset.uid = assets.length - 1;
        assets.push(asset);
    }
    return assets;
}

export const sampleBriefs = [
    {
        uid: '1',
        title: 'Hello chat system!',
        slug: 'hello-chat-system',
        members: [
            'username_here',
            'jamie'
        ],
        chat_uid: 1,
        assetList_uid: 3
    },
    {
        uid: '2',
        title: 'Inca Trail',
        slug: 'inca-trail',
        members: [
            'username_here',
            'jamie'
        ],
        chat_uid: 2,
        assetList_uid: 2,
    },
    {
        uid: '3',
        title: 'Curve Open Tour 1',
        slug: 'curve-open-tour-1',
        members: [
            'username_here',
            'jamie'
        ],
        chat_uid: 3,
        assetList_uid: 1,

    }
], sampleChats = [
    {
        uid: 1,
        msgs: shuffle(msgs, 5),
        alerts: 0,
        hasUnread: false
    },
    {
        uid: 2,
        msgs: shuffle(msgs, 50),
        alerts: 0,
        hasUnread: false
    },
    {
        uid: 3,
        msgs: shuffle(msgs, 20),
        alerts: 0,
        hasUnread: false
    },

], sampleAssetLists = [
    {
        uid: 1,
        assets: buildAssets(10)
    },
    {
        uid: 2,
        assets: buildAssets(0)
    },
    {
        uid: 3,
        assets: buildAssets(100)
    }
]
