import React from 'react';

import {Editor, EditorState} from 'draft-js';
import {connect} from 'react-redux';

import chat from '../css/chat.scss';

class CreateChat extends React.Component {
    constructor(props){
        super(props);
        //this.state = { editorState: EditorState.createEmpty() }
        //this.onChange = editorState => this.setState({editorState});
    }
    render(){
        return (
            <div className={'chat-pane create-msg'}>
                <textarea
                    placeholder="Add something to the convo here."
                    name="create-msg"></textarea>
            </div>
        );
    }
}

export default CreateChat
