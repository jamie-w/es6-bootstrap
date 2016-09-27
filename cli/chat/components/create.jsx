import React from 'react';

import {Editor, EditorState} from 'draft-js';
import {connect} from 'react-redux';

import chat from '../css/chat.scss';

class CreateChat extends React.Component {
    constructor(props){
        super(props);
        this.state = { editorState: EditorState.createEmpty() }
        this.onChange = editorState => this.setState({editorState});
    }
    render(){
        const {editorState} = this.state;
        return (
            <div className={'chat-pane create-msg'}>
                <Editor
                    editorState={editorState}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default CreateChat
