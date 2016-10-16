import React from 'react';

import {Editor, EditorState} from 'draft-js';
import {connect} from 'react-redux';

import chat from '../css/chat.scss';

import bows from 'bows';

var logger = bows("chats.create");

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = dispatch => ({
    sendMsg: (chat_uid, msg) => dispatch({
        type: 'SEND_MSG', chat_uid, msg
    })
})

class CreateChat extends React.Component {
    constructor(props){
        super(props);
        //this.state = { editorState: EditorState.createEmpty() }
        //this.onChange = editorState => this.setState({editorState});
    }
    handleKeyUp(e, self){
        if(e.keyCode == 13 && e.shiftKey == false){
            this.props.sendMsg(
                self.props.chat.uid,
                e.target.value.trim()
            );
            e.target.value='';
        }
    }
    render(){
        return (
            <div className={'chat-pane create-msg'}>
                <textarea
                    placeholder="Add something to the convo here."
                    name="create-msg"
                    onKeyUp={e => this.handleKeyUp(e, this)}
                />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateChat)
