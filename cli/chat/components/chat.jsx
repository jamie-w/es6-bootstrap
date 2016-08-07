import React from 'react';

import sass from '../css/chat.scss';

class Chat extends React.Component {
    render(){
        return (
            <div className="chat-box">
                <ul>
                    <li>Some chat will go here</li>
                    <li>Another bit of chat</li>
                </ul>
            </div>
        );
    }
}

export default Chat;
