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
        const footerStyle = {
            backgroundColor: '#333',
            color: '#eee',
            position: 'absolute',
            bottom: '0px',
            left: '0px',
            width: '100%',
            padding: '10px 20px',
            fontSize: '16px',
        }
        return (
            <div style={footerStyle}>
                Hello footer
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Footer);
