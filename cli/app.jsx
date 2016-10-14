import React from 'react';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

import settings from '../settings';
import Home from './main/components/home';
import Account from './users/components/account';
import CreateBrief from './briefs/components/create-brief';
import Brief from './briefs/components/brief';

import NotFound from './notfound';
import DevTools from './devtools';

const AppComponents = () => (
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <IndexRoute/>
            <Route path="account" component={Account}/>
            <Route path ="briefs">
                <Route path=":slug" component={Brief}/>
                <Route path="create" component={CreateBrief}/>
            </Route>
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
        //    <DevTools/>
        </div> :
        // production app
        <AppComponents/>
    }
};

export default App
