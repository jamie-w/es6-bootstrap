import React from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router';

import TopNav from './topnav';


class Home extends React.Component {
    render() {
    return (
        <div>
            <TopNav />
            <div className="container">
            {this.props.children}
            </div>
        </div>
    );
  }
}

export default Home;
