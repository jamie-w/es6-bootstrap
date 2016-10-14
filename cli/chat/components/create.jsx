import React from 'react';

import {Editor, EditorState} from 'draft-js';
import {connect} from 'react-redux';

import chat from '../css/chat.scss';

import bows from 'bows';

var logger = bows("chats.create");

const mapStateToProps = (state, props) => ({
    brief: state.briefs.find(b => b.title == props.brief.title)
})

const mapDispatchToProps = dispatch => ({
    sendMsg: (brief_title, msg) => dispatch({
        type: 'SEND_MSG', brief_title, msg
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
            logger("Enter pressed");
            logger("Sending", self.props.brief.title, e.target.value);
            this.props.sendMsg(self.props.brief.title, e.target.value);
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
