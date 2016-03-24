import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const createUser = (username) => {
    console.log("Username", username);
    return {
        type: 'CREATE_USER',
        username
    }
};

function mapStateToProps(state){
    return {users: state.users}
}

class CreateUser extends React.Component{
    handleClick(username){
        this.props.dispatch(createUser(username));
    }
    render(){
        return (
            <div>
                <input ref="username" placeholder="Username"/>
                <button onClick={() => this.handleClick(this.refs.username.value)}>
                    Create!
                </button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(CreateUser);
