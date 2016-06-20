import React from 'react';

import {connect} from 'react-redux';

import {Navbar,Nav} from 'react-bootstrap';

import GuestNav from './guestnav';
import UserNav from './usernav';


const mapStateToProps = (state) => ({
    currUser: state.users.currUser,
});

class TopNav extends React.Component {
    getNavItems(){
        return this.props.currUser ?
            <UserNav/> : <GuestNav/>;
    }

    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">JWJS</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    {this.getNavItems()}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default connect(
    mapStateToProps,
)(TopNav);
