import React from 'react';
import {connect} from 'react-redux';

import Login from './login';
import Register from './register';
import Logout from './logout';

import {Grid, Row, Col} from 'react-flexbox-grid';

const renderStateToProps = state => ({
    currUser: state.users.currUser
})

class Account extends React.Component{
   render(){
        return this.props.currUser ? (
                <Grid>
                    Hello <b>{this.props.currUser.username}</b>
                    <Logout />
                </Grid>
            ) :
            (<div><Login/><Register/></div>);
   }
}

export default connect(
    renderStateToProps
)(Account);
