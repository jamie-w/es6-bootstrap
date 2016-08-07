import React from 'react';

import {FieldGroup} from '../../utils';
import {Col, Tabs, Tab} from 'react-bootstrap';

import Chat from '../../chat/components/chat';
import CreateChat from '../../chat/components/create';
// the two xs={6} will be replaced with a chat and
// resource tabs respectively

class Brief extends React.Component {

    render(){
        return (
            <div className="clearfix">
                <Col xs={8}>
                    <h2> Brief title </h2>
                    <Chat/>
                    <CreateChat/>
                </Col>
                <Col xs={4}>
                    <Tabs defaultActiveKey="4" id="stupidtabs" className="pull-right">
                        <Tab eventKey="1" title="Notes"> </Tab>
                        <Tab eventKey="2" title="Links"> </Tab>
                        <Tab eventKey="3" title="Docs"> </Tab>
                        <Tab eventKey="4" title="Photos"></Tab>
                    </Tabs>
                </Col>
            </div>
        );
    }
}

export default Brief
