import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import styles from '../../styles';

const mapStateToProps = (state) => ({
    errorMsg: state.users.errors.login,
})

const mapDispatchToProps = (dispatch) => ({
    onLoginClick: (username, password) => dispatch({
        type: 'LOGIN', username, password
    })
})


class Login extends React.Component {
    render() {
        return (
            <div>
                <h2>Login</h2>
                <p>
                    <input ref="username" placeholder="Username"/>
                </p>
                <p>
                    <input ref="password" type="password" placeholder="Password"/>
                </p>
                <button onClick={() => this.props.onLoginClick(
                    this.refs.username.value,
                    this.refs.password.value
                )}>
                   Login
                </button>
                <p>{this.props.errorMsg}</p>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
