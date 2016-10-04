import React from 'react';

import {FieldGroup} from '../../utils';
import {Col, Tabs, Tab} from 'react-bootstrap';

import Assets from './assets';
import Chat from '../../chat/components/chat';

import sass from '../css/brief.scss';

class Brief extends React.Component {
    render(){
        return (
            <div className={'fill'}>
                <Chat className={'scroll'}/>
                <Assets className={'scroll'}/>
            </div>
        );
    }
}

export default Brief
