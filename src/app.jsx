import React from 'react';

import {connect} from 'react-redux';

import DevTools from './devtools';
import UserList from './users/components/userlist';
import Register from './users/components/register';
import Login from './users/components/login';

const mapStateToProps = (state) => ({
    currUser: state.users.currUser
})

class App extends React.Component {
  render() {
    return (this.props.currUser ?
        <div>
            <h1>Welcome {this.props.currUser}</h1>
            <DevTools/>
        </div> :
        <div>
            <h1>This is a chat app.</h1>
            <Register/>
            <Login/>
            <UserList/>
            <DevTools/>
        </div>
    );
  }
}

export default connect(mapStateToProps)(App);
