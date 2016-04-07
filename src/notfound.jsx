import React from 'react';

import DevTools from './devtools';

class NotFound extends React.Component {
    render(){
        return (
            <div>
                <h2>Whomp whomp ... *tuba sound*</h2>
                <h4>That page could not be found.</h4>
                <DevTools/>
            </div>
        )
    }
}

export default NotFound
