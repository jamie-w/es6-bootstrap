import React, { Component } from 'react';

import DevTools from './devtools';
import UserList from './users/components/userlist';
import CreateUser from './users/components/createuser';

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is a chat app.</h1>
        <p>
            <button>Create User</button>
            <button>Select User</button>
        </p>
        <CreateUser/>
        <UserList/>
        <DevTools/>
      </div>
    );
  }
}

export default App;
