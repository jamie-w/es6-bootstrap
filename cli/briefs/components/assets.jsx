import React from 'react';
import {Col, Tabs, Tab} from 'react-bootstrap';

import bows from 'bows';

var logger = bows('assets');

class BaseAsset extends React.Component {
    render(){
        logger(this)
        return (
            <div className={this.props.className + ' asset-item'}>
                {this.props.children}
                <h4>{this.props.title}</h4>
                <div className={'opts'}>
                    Some options for the asset
                </div>
            </div>
        );
    }
}

class PhotoAsset extends BaseAsset {
    render(){
        return (
            <BaseAsset {...this.props} className={'photo-asset'}>
                <div className={'content'}>
                    <img src="http://thecatapi.com/api/images/get?format=src"/>
                </div>
            </BaseAsset>
        );
    }
}


class Assets extends React.Component {
    render(){
        return (
            <Col xs={6} className={'full-height assets'}>
                <Tabs bsStyle="pills"
                    defaultActiveKey="1"
                    id="stupidtabs"
                    className="resources">
                    <Tab eventKey="1" title="Photos">
                        <div className={'asset-pane'}>
                            {[...Array(20).keys()].map(function(obj, i){
                                return <PhotoAsset title="A photo!" body='Some body goes here'/>
                            })}
                        </div>
                    </Tab>
                    <Tab eventKey="2" title="Links">
                        <div className={'asset-pane'}>
                        {[...Array(50).keys()].map(function(obj, i){
                            return <BaseAsset title={'This will be a link'}/>
                        })}
                        </div>
                    </Tab>
                    <Tab eventKey="3" title="Docs">
                        <div className={'asset-pane'}>
                        {[...Array(50).keys()].map(function(obj, i){
                            return <BaseAsset title={'This will be a Doc'}/>
                        })}
                        </div>
                    </Tab>
                    <Tab eventKey="4" title="Notes">
                        <div className={'asset-pane'}>
                        {[...Array(50).keys()].map(function(obj, i){
                            return <BaseAsset title={'This will be a note or a snippet'}/>
                        })}
                        </div>
                    </Tab>
                </Tabs>
                <div className={'asset-footer'}>
                   <h3>Hello footer</h3>
                </div>
            </Col>
        );
    }
}

export default Assets
