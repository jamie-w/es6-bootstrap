import React from 'react';
import {connect} from 'react-redux';

class User extends React.Component{
    render(){
        console.log("User", this);
        return (
            <li>{this.props.user.username}</li>
        );
    }
}

export default connect()(User);
