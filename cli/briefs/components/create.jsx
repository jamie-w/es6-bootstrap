import React from 'react';

import {
    Accordion, Panel, ListGroup, ListGroupItem, Button, Modal
} from 'react-bootstrap';
import {FieldGroup} from '../../utils';

class CreateBrief extends React.Component {
    render(){
        return (
            <Modal {...this.props}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a Brief</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FieldGroup
                        id="briefTitle"
                        type="text"
                        label="The name of your brief"
                        placeholder="Title here"
                    />
                    <FieldGroup
                        id="briefUsers"
                        componentClass="textarea"
                        label="Enter email addresses here"
                        placeholder="Comma separated email addresses"
                    />
                    <div className={'clearfix'}>
                        <Button
                            bsStyle={'success'}
                            className={'pull-right'}
                            onClick={this.props.onHide}
                        >Create</Button>
                    </div>
                </Modal.Body>
            </Modal>);
    }
}

export default CreateBrief;
