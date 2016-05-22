import React from 'react';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => ({
    onLogoutClick: () => dispatch({
        type: 'LOGOUT'
    })
})

class Register extends React.Component {
    render(){
        return (
            <button onClick={() => this.props.onLogoutClick()}>Logout</button>
        )
    }
}

export default connect(
    undefined,
    mapDispatchToProps
)(Register)
