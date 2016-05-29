import React from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router';

import Logout from './users/components/logout';

const mapStateToProps = (state) => ({
    currUser: state.users.currUser,
    nextUrl: false
});

const mapDispatchToProps = (dispatch, action) => ({
    addNextUrl: (nextUrl) => dispatch({
        type: 'ADD_NEXT_URL', nextUrl
    })
})

class App extends React.Component {
  render() {
    return (this.props.currUser ?
        <div>
            <h1>Welcome {this.props.currUser.username}</h1>
            <p><Logout /></p>
        </div> :
        <div>
            <Link
                to={`/account`}
                onClick={() => this.props.addNextUrl(
                    this.props.routes[this.props.routes.length-1].path
                )}
            >Account</Link>
        </div>
    );
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
