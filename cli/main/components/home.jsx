import React from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Col} from 'react-bootstrap';

import Menu from './menu';
import TopNav from './topnav';
import Footer from './footer';

import sass from '../css/main.scss';

class Home extends React.Component {
    render() {
    return (
        <div>
            <TopNav/>
            <div className="container">
                <Col xs={2} style={{marginTop:'55px'}}>
                    <Menu/>
                </Col>
                <Col xs={10}>
                    {this.props.children}
                </Col>
            </div>
            <Footer/>
        </div>
    );
  }
}

export default Home;
