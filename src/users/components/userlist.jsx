import React from 'react';
import {connect} from 'react-redux';

import User from './user';

const mapStateToProps = (state) => {
    console.log("UserList mapStateToProps", state);
    return {users: state.users};
}

class UserList extends React.Component {
    render(){
        console.log("UserList", this);
        return this.props.users ?
            <ul>{this.props.users.map(function(user){
                    <User {...user}/>
                })}
            </ul> :
            <ul/>;
    }
}

export default connect(mapStateToProps)(UserList);
