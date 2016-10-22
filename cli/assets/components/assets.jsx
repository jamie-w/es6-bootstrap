import React from 'react';
import {connect} from 'react-redux';
import {
    Col, Tabs, Tab, FormGroup, FormControl, InputGroup, DropdownButton, MenuItem, Button
} from 'react-bootstrap';

import bows from 'bows';

var logger = bows('assets');


class BaseAsset extends React.Component {
    render(){
        return (
            <div className={this.props.className + ' asset-item'}>
                {this.props.children}
                <h4>{this.props.obj.title}</h4>
                <div className={'opts'}>{this.props.obj.href}</div>
            </div>
        );
    }
}

class PhotoAsset extends BaseAsset {
    render(){
        return (
            <BaseAsset {...this.props} className={'photo-asset'}>
                <div className={'content'}>
                    <img src={this.props.obj.href}/>
                </div>
            </BaseAsset>
        );
    }
}

const mapStateToProps = (state, props) => ({
    assets: state.assetLists,
    assetList: state.assetLists.find(al => props.assetList_uid === al.uid)
});

const mapDispatchToProps = (dispatch) => ({
    addAsset : (assetListId, asset) => dispatch({
        type: 'ADD_ASSET', assetListId, asset
    })
})

const guessAssetType = (href, assetType) => {
    if(href.match(/.*(jpg|png|gif)$/g))
        return 'img'
    else if(assetType)
        return assetType
    else
        return 'link';
}

class Assets extends React.Component {
    handleAddAsset(){
        var href = this.refs.href.value;
        var asset = {
            uid: this.props.assetList.assets.length - 1,
            type: guessAssetType(href, this.assetType),
            title: 'Just a temp title for now',
            href,
        }
        this.props.addAsset(
            this.props.assetList.uid,
            asset
        )
    }

    handleTypeSelect(key, event){
        this.assetType = key
    }

    render(){
        return (
            <Col xs={6} className={'full-height assets'}>
                <Tabs
                    defaultActiveKey="1"
                    id="stupidtabs">
                    <Tab eventKey="1" title="Photos">
                        <div className={'asset-pane'}>
                        {this.props.assetList.assets.map(function(obj, i){
                            if(obj.type == 'img'){
                                return <PhotoAsset key={i} obj={obj}/>
                            }
                        })}
                        </div>
                    </Tab>
                    <Tab eventKey="2" title="Links" className={'pull-right'}>
                        <div className={'asset-pane'}>
                        {this.props.assetList.assets.map(function(obj, i){
                            if(obj.type == 'link'){
                                return <BaseAsset key={i} obj={obj}/>
                            }
                        })}
                        </div>
                    </Tab>
                    <Tab eventKey="3" title="Docs">
                        <div className={'asset-pane'}>
                        {this.props.assetList.assets.map(function(obj, i){
                            if(obj.type == 'doc'){
                                return <BaseAsset key={i} obj={obj}/>
                            }
                        })}
                        </div>
                    </Tab>
                    <Tab eventKey="4" title="Notes">
                        <div className={'asset-pane'}>
                        {this.props.assetList.assets.map(function(obj, i){
                            if(obj.type == 'note'){
                                return <BaseAsset key={i} obj={obj}/>
                            }
                        })}
                        </div>
                    </Tab>
                </Tabs>
                <div className={'asset-footer'}>
                    <FormGroup>
                        <InputGroup>
                            <DropdownButton id="asset-type-opts"
                                componentClass={InputGroup.Button}
                                dropup={true} noCaret={true}
                                title="Add something"
                                onSelect={this.handleTypeSelect.bind(this)}>
                                <MenuItem eventKey="img">Photo</MenuItem>
                                <MenuItem eventKey="doc">Document</MenuItem>
                                <MenuItem eventKey="link">Link</MenuItem>
                                <MenuItem eventKey="note">Snippet</MenuItem>
                            </DropdownButton>
                            <input className={'form-control'} type="text" placeholder="http://" ref="href"/>
                            <InputGroup.Button>
                                <Button bsStyle={'info'} onClick={this.handleAddAsset.bind(this)}>
                                    <span className={'fa fa-plus'}></span>
                                </Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                </div>
            </Col>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Assets)
