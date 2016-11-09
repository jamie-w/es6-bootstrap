import React from 'react';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

import settings from '../settings';
import Home from './main/components/home';
import Account from './users/components/account';
import Brief from './briefs/components/brief';

import {Chats} from './chat/components/chat';
import {AssetLists} from './assets/components/assets';

import NotFound from './notfound';
import DevTools from './devtools';

const AppComponents = () => (
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <IndexRoute/>
            <Route path="account" component={Account}/>
            <Route path ="briefs">
                <Route path=":slug" component={Brief}/>
            </Route>
            <Route path="chat/:chatId" component={Chats}/>
            <Route path="assets/:assetListId" component={AssetLists}/>
            <Route path="*" component={NotFound} status={404}/>
        </Route>
    </Router>
);

class App extends React.Component{
    render() {
        return settings.DEBUG ?
        // debug type app
        <div>
            <AppComponents/>
            <DevTools/>
        </div> :
        // production app
        <AppComponents/>
    }
};

export default App
