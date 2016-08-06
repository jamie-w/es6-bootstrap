import React from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router';

import TopNav from './topnav';
import Footer from './footer';


class Home extends React.Component {
    render() {
    return (
        <div>
            <TopNav/>
            <div className="container">
            {this.props.children}
            </div>
            <Footer/>
        </div>
    );
  }
}

export default Home;
