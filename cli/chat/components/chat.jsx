import React from 'react';
import {Col, Tabs, Tab} from 'react-bootstrap';

import CreateChat from '../../chat/components/create';

import chat from '../css/chat.scss';

class ChatHeader extends React.Component {
    render(){
        return (<div className={'chat-pane chat-header'}>
            <h2 className={'inline'}>Hello Chat</h2>
        </div>);
    }
}


class Chat extends React.Component {
    render(){
        return (
            <Col xs={6} className={'full-height'}>
                <ChatHeader/>
                <div className={'chat-pane chat-box'}>
                    <ul>
                        {[...Array(50).keys()].map(function(obj, i){
                            return <li>Hi, this is some chat.</li>
                        })}
                    </ul>
                </div>
                <CreateChat/>
            </Col>
        );
    }
}

export default Chat;
