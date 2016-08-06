import React from 'react';
import {connect} from 'react-redux';

class User extends React.Component{
    render(){
        return (
            <li key={this.props.id}>{this.props.username}</li>
        );
    }
}

export default connect()(User);
