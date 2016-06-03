import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router, Route, Link, browserHistory} from 'react-router';

import settings from '../settings';
import Home from './main/components/home';
import Account from './users/components/account';

import NotFound from './notfound';
import DevTools from './devtools';

const AppComponents = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}/>
            <Route path="/account" component={Account}/>
            <Route path="*" component={NotFound}/>
        </Router>
    </MuiThemeProvider>
);

const App = () => (
    settings.DEBUG ?
    <div>
        <AppComponents/>
        <DevTools/>
    </div> :
    <AppComponents/>
);

export default App
