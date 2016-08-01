import React from 'react';
import {connect} from 'react-redux';

import User from './user';

const mapStateToProps = (state) => {
    return {users: state.users.userlist};
}

class UserList extends React.Component {
    render(){
        return (
            <ul>{this.props.users.map(user =>
                    <User key={user.id} {...user}/>
                )}
            </ul>
        );
    }
}

export default connect(mapStateToProps)(UserList);
