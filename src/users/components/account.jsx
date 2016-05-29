import React from 'react';
import {connect} from 'react-redux';

import Login from './login';
import Register from './register';
import Logout from './logout';

const renderStateToProps = state => ({
    currUser: state.users.currUser
})

class Account extends React.Component{

   render(){
        return this.props.currUser ? (
                <div>
                    Hello <b>{this.props.currUser.username}</b>
                    <Logout />
                </div>
            ) :
            (<div>
                <Login />
                <Register />
            </div>);
   }
}

export default connect(
    renderStateToProps
)(Account);
