import React from 'react';
import {Col, Tabs, Tab} from 'react-bootstrap';

import {FieldGroup} from '../../utils';

class CreateBrief extends React.Component {

    render(){
        return (
            <Col xs={8} className={'full-height bg-dark'}>
                <h2>Create a new brief</h2>
                <FieldGroup
                    id="briefTitle"
                    type="text"
                    placeholder="Enter title here"
                />
                <textarea style={{width: '500px'}}
                    placeholder="Emails or names separated by commas"
                />
                <button className="btn btn-primary">Create</button>
            </Col>
        );
    }
}

export default CreateBrief
