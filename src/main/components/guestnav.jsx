import React from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router';

import {Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import bows from 'bows';

const logger = bows('guestnav');

const mapStateToProps = (state) => ({
    currUser: state.users.currUser,
    nextUrl: false
});

const mapDispatchToProps = (dispatch, action) => ({
    addNextUrl: (nextUrl) => dispatch({
        type: 'ADD_NEXT_URL', nextUrl
    }),
});

class GuestNav extends React.Component {
    render() {
        return (
        <Nav pullRight>
            <LinkContainer eventKey={1} to={`/account/`}
                onClick={() => this.props.addNextUrl(
                    window.location.pathname
                )}>
                <NavItem>Account</NavItem>
            </LinkContainer>
        </Nav>);
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GuestNav);
