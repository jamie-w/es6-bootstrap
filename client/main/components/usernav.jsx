import React from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router';

import {Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const mapStateToProps = (state) => ({
    currUser: state.users.currUser,
    nextUrl: false
});

const mapDispatchToProps = (dispatch, action) => ({
    onLogoutClick: () => dispatch({type: 'LOGOUT'})
});

class UserNav extends React.Component {
    render() {
        return (
            <Nav pullRight>
                <NavItem onClick={() => this.props.onLogoutClick()}>Logout</NavItem>
            </Nav>
        );
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserNav);
