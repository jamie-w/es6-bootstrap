import React from 'react';
import {Link} from 'react-router';
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
            <div>
                <h1 className="container">JWJS</h1>
                <hr/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(TopNav);
