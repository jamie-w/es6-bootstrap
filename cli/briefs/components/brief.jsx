import React from 'react';
import {connect} from 'react-redux';

import {FieldGroup} from '../../utils';
import {Col, Tabs, Tab} from 'react-bootstrap';

import Chat from '../../chat/components/chat';
import Assets from '../../assets/components/assets';

import sass from '../css/brief.scss';

const mapStateToProps = (state, props) => ({
    brief: state.briefs.find(obj => obj.slug === props.params.slug)
})

import bows from 'bows';

const logger = bows('brief.jsx');

class Brief extends React.Component {
    render(){
        return (
            <div className={'fill'}>
                <Chat chat_uid={this.props.brief.chat_uid} className={'scroll'}/>
                <Assets assetList_uid={this.props.brief.assetList_uid} className={'scroll'}/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(Brief)
