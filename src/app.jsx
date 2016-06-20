import React from 'react';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

import settings from '../settings';
import Home from './main/components/home';
import Account from './users/components/account';

import NotFound from './notfound';
import DevTools from './devtools';

const AppComponents = () => (
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <IndexRoute/>
            <Route path="account" component={Account}/>
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
        </div> :
        // production app
        <AppComponents/>
    }
};

export default App
