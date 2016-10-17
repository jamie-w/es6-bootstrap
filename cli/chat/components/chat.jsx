import React from 'react';
import {connect} from 'react-redux';
import {Col, Tabs, Tab} from 'react-bootstrap';

import CreateChat from './create';

import chat from '../css/chat.scss';
import bows from 'bows';

const logger = bows('chat.jsx');

class ChatHeader extends React.Component {
    render(){
        return (<div className={'chat-pane chat-header'}>
            <h2 className={'inline'}>{this.props.title}</h2>
        </div>);
    }
}


class Msg extends React.Component{
    render(){
        return (
            <li>{this.props.msg}</li>
        );
    }
}

const mapStateToProps = (state, props) => ({
    chats: state.chats,
    chat: state.chats.find(c => props.brief.chat_uid === c.uid)
})



class Chat extends React.Component {

    componentDidUpdate(){
        logger(this.refs.msgs, this.refs.msgs.scrollHeight);
        this.refs.msg_box.scrollTop = this.refs.msgs.scrollHeight;
    }
    render(){
        return (
            <Col xs={6} className={'full-height'}>
                <ChatHeader title={this.props.brief.title}/>
                <div className={'chat-pane chat-box'} ref="msg_box">
                    <ul ref="msgs">
                        {this.props.chat.msgs.map(function(msg, i){
                            return <Msg key={i} msg={msg}/>
                        })}
                    </ul>
                </div>
                <CreateChat chat={this.props.chat}/>
            </Col>
        );
    }
}

export default connect(
    mapStateToProps
)(Chat);
