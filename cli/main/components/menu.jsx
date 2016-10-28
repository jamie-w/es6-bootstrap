import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {
    Accordion, Panel, ListGroup, ListGroupItem, Button, Modal
} from 'react-bootstrap';
import bows from 'bows';

import {FieldGroup} from '../../utils';

const logger = bows('menu.jsx');

const mapStateToProps = (state) => ({
    briefs: state.briefs
})


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


class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {showModal : false};
    }
    close(){
        this.setState({showModal: false})
    }
    open(){
        this.setState({showModal: true});
    }
    render(){
        return (
            <div>
                <Panel header="Account" eventKey="1">
                    <Link to="/account/">Details</Link>
                    <Link to="/account/">Contact</Link>
                    <Link to="/account/">Security</Link>
                    <Link to="/account/">Preferences</Link>
                </Panel>
                <Panel header="Briefs" eventKey="2">
                    {this.props.briefs.map(function(brief, i){
                        return <Link key={i} to={`/briefs/${brief.slug}/`}>{brief.title}</Link>
                    })}
                    <p>&nbsp;</p>
                    <Button bsStyle={'info'} bsSize={'xsmall'} onClick={this.open.bind(this)}>
                        Create a brief ...
                    </Button>
                </Panel>
                <CreateBrief show={this.state.showModal} onHide={this.close.bind(this)}/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(Menu)
