import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router';

const mapDispatchToProps = dispatch => ({
    onLogoutClick: () => dispatch({
        type: 'LOGOUT'
    })
})

class Register extends React.Component {
    render(){
        return (
            <Link to='/'
                onClick={() => this.props.onLogoutClick()}
            >Logout</Link>
        )
    }
}

export default connect(
    undefined,
    mapDispatchToProps
)(Register)
