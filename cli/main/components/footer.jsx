import React from 'react';

import {connect} from 'react-redux';

import {Navbar,Nav} from 'react-bootstrap';

import GuestNav from './guestnav';
import UserNav from './usernav';


const mapStateToProps = (state) => ({
    currUser: state.users.currUser,
});

class Footer extends React.Component {

    render() {
        return (
            <div>
                Hello footer
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Footer);
