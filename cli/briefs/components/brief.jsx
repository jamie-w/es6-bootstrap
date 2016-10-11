import React from 'react';
import {connect} from 'react-redux';

import {FieldGroup} from '../../utils';
import {Col, Tabs, Tab} from 'react-bootstrap';

import Assets from './assets';
import Chat from '../../chat/components/chat';

import sass from '../css/brief.scss';

const mapStateToProps = (state) => ({
    briefs: state.briefs
})

import bows from 'bows';

const logger = bows('brief.jsx');

class Brief extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        var brief = this.props.briefs.find(obj => obj.slug === this.props.params.slug);
        return (
            <div className={'fill'}>
                <Chat brief={brief} className={'scroll'}/>
                <Assets className={'scroll'}/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(Brief)
