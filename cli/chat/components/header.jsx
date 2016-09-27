import React from 'react';

import {connect} from 'react-redux';

import chat from '../css/chat.scss';

class ChatHeader extends React.Component {
    render(){
        return (<div className={'chat-pane chat-header'}>
            <h2 className={'inline'}>Hello Chat</h2>
        </div>);
    }
}

export default ChatHeader
