import React from 'react';
import {Col, Tabs, Tab} from 'react-bootstrap';

import chat from '../css/chat.scss';
import CreateChat from '../../chat/components/create';
import ChatHeader from '../../chat/components/header';

class Chat extends React.Component {
    render(){
        return (
            <Col xs={6} className={'full-height'}>
                <ChatHeader/>
                <div className={'chat-pane chat-box'}>
                    <ul>
                        <li>Some chat will go here</li>
                        <li>Another bit of chat</li>
                    </ul>
                </div>
                <CreateChat/>
            </Col>
        );
    }
}

export default Chat;
