import React from 'react';
import {connect} from 'react-redux';

import {FieldGroup} from '../../utils';
import {Col, Tabs, Tab} from 'react-bootstrap';

import Chat from '../../chat/components/chat';
import Assets from '../../assets/components/assets';

import sass from '../css/brief.scss';

const mapStateToProps = (state, props) => ({
    brief: state.briefs.byId[props.params.slug]
})

import bows from 'bows';

const logger = bows('brief.jsx');

class BriefHeader extends React.Component {
    render(){
        return (<div className={'chat-pane chat-header'}>
            <h2 className={'inline'}>{this.props.brief.title}</h2>
        </div>);
    }
}
class Brief extends React.Component {
    render(){
        return (
            <div className={'fill'}>
                <BriefHeader {...this.props}/>
                <Col xs={6} className={'full-height'}>
                    <Chat chat_uid={this.props.brief.chatId} className={'scroll'}/>
                </Col>
                <Col xs={6} className={'full-height'}>
                    <Assets assetList_uid={this.props.brief.assetListId} className={'scroll'}/>
                </Col>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(Brief)
