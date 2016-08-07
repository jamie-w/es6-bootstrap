import React from 'react';

import {FieldGroup} from '../../utils';

class CreateBrief extends React.Component {

    render(){
        return (
            <FieldGroup
                id="briefTitle"
                type="text"
                label="Brief Title"
                placeholder="Enter title here"
            />
            <FieldGroup
                id="inviteFriends"
                type="textfield"
                label="Invite your friends here"
                placeholder="Emails or names separated by commas"
            />
            <button className="btn btn-primary">Create</button>
        );
    }
}

export default CreateBrief;
