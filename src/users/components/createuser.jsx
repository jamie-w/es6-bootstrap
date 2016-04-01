import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    errorMsg: state.users.errorMsg
})

const mapDispatchToProps = (dispatch) => ({
    onCreateUserClick: (username) => dispatch({
        type: 'CREATE_USER', username
    })
})

class CreateUser extends React.Component{
    render(){
        console.log("CreateUserProps", this);
        return (
            <div>
                <input ref="username" placeholder="Username"/>
                <button onClick={() => this.props.onCreateUserClick(this.refs.username.value)}>
                    Create!
                </button>
                <p>{this.props.errorMsg}</p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateUser);
