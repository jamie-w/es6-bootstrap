import React from 'react';
import {connect} from 'react-redux';
import {Col, Tabs, Tab} from 'react-bootstrap';

import CreateChat from './create';

import chat from '../css/chat.scss';
import bows from 'bows';

const logger = bows('chat.jsx');



class Msg extends React.Component{
    render(){
        return (
            <li>{this.props.msg}</li>
        );
    }
}

const mapStateToProps = (state, props) => ({
    chat: state.chats.byId[props.chatId],
})



class Chat extends React.Component {

    componentDidUpdate(){
        this.refs.msg_box.scrollTop = this.refs.msgs.scrollHeight;
    }
    render(){
        return (
            <div>
                <div className={'chat-pane chat-box'} ref="msg_box">
                    <ul ref="msgs">
                        {this.props.chat.msgs.map(function(msg, i){
                            return <Msg key={i} msg={msg}/>
                        })}
                    </ul>
                </div>
                <CreateChat chat={this.props.chat}/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(Chat);
