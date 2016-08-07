import React from 'react';

import {FieldGroup} from '../../utils';

class CreateBrief extends React.Component {

    render(){
        return (
            <div>
                <h2>Create a new brief</h2>
                <FieldGroup
                    id="briefTitle"
                    type="text"
                    placeholder="Enter title here"
                />
                <textarea style={{width: '100%'}}
                    placeholder="Emails or names separated by commas"
                />
                <button className="btn btn-primary">Create</button>
            </div>
        );
    }
}

export default CreateBrief
