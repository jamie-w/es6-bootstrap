import React from 'react';

import {FieldGroup} from '../../utils';
import {Col, Tabs, Tab} from 'react-bootstrap';

import Chat from '../../chat/components/chat';

import sass from '../css/brief.scss';

// the two xs={6} will be replaced with a chat and
// resource tabs respectively

class Brief extends React.Component {
    render(){
        return (
            <div className={'fill'}>
                <Chat/>
                <Col xs={6} className={'full-height bg-dark bordered-light'}>
                    <Tabs bsStyle="pills"
                        defaultActiveKey="1"
                        id="stupidtabs"
                        className="resources">
                        <Tab eventKey="1" title="Photos">
                            Some photos will go here
                        </Tab>
                        <Tab eventKey="2" title="Links"> </Tab>
                        <Tab eventKey="3" title="Docs"> </Tab>
                        <Tab eventKey="4" title="Notes"> </Tab>
                    </Tabs>
                </Col>
            </div>
        );
    }
}

export default Brief
