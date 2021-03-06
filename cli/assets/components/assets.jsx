import React from 'react';
import Masonry from 'react-masonry-component';
import {connect} from 'react-redux';
import {
    Col, Tabs, Tab, FormGroup, FormControl, InputGroup, DropdownButton, Dropdown, MenuItem, Button
} from 'react-bootstrap';

import bows from 'bows';
import assetsCss from '../css/assets.scss';

var logger = bows('assets');

const mapStateToProps = (state, props) => ({
    assets: state.assetLists,
    assetList: state.assetLists.find(al => props.assetList_uid === al.uid)
});

const mapDispatchToProps = (dispatch) => ({
    addAsset: (assetListId, asset) => dispatch({
        type: 'ADD_ASSET', assetListId, asset
    }),
    rmAsset: (assetListId, assetId) => dispatch({
        type: 'RM_ASSET', assetListId, assetId
    })
})

class BaseAsset extends React.Component {
    handleDeleteAsset(){
        this.props.rmAsset(this.props.assetList.uid, this.props.asset.uid)
    }
    render(){
        return (
            <div className={this.props.className + ' asset-item'}>
                {this.props.children}
                <h4>{this.props.asset.title}</h4>
                <div className={'opts'}>
                    <a href={this.props.asset.href} target="_blank">Visit</a>
                    <Dropdown id={'asset-' + this.props.asset.uid} className={'pull-right'} title=''>
                        <span bsRole='toggle'
                            className={'fa fa-ellipsis-v fa-lg pointer'}
                            style={{marginRight: '3px', color: '#777'}}/>
                        <Dropdown.Menu>
                            <MenuItem
                                eventKey='delete'
                                onClick={this.handleDeleteAsset.bind(this)}
                            >Delete</MenuItem>
                        </Dropdown.Menu>
                    </Dropdown>
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
                    <img src={this.props.asset.href}/>
                </div>
            </BaseAsset>
        );
    }
}

class CreateAsset extends React.Component {

    guessAssetType(href, assetType){
        if(href.match(/.*(jpg|png|gif)$/g))
            return 'img'
        else if(assetType)
            return assetType
        else
            return 'link';
    }

    handleTypeSelect(key, event){
        this.assetType = key
    }


    handleAddAsset(){
        var href = this.refs.href.value;
        var asset = {
            uid: this.props.assetList.assets.length - 1,
            type: this.guessAssetType(href, this.assetType),
            title: 'Just a temp title for now',
            href,
        }
        this.props.addAsset(
            this.props.assetList.uid,
            asset
        );
    }

    render(){
        return (
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
            </FormGroup>)
    }
}

class Assets extends React.Component {

    constructor(props){
        super(props);
        this.numAssets = props.assetList.assets.length;
    }

    componentDidUpdate(){
        if(this.numAssets != this.props.assetList.assets.length){
            this.numAssets = this.props.assetList.assets.length;
            this.refs.assetList.scrollTop = 0;
        }
    }

    render(){

        var parentProps = {
            assetList: this.props.assetList,
            rmAsset: this.props.rmAsset
        };

        return (
            <div className={'assets full-height'}>
                <div className={'asset-pane'} ref='assetList'>
                    <Masonry
                        options={{transitionDuration: 200}}
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={true}>
                        {this.props.assetList.assets.map(function(asset, i){
                            switch(asset.type){
                                case 'img':
                                    return <PhotoAsset key={i} {...parentProps} asset={asset}/>
                                default:
                                    return <BaseAsset key={i} {...parentProps} asset={asset}/>
                            }
                        })}
                    </Masonry>
                </div>
                <div className={'asset-footer'}>
                    <CreateAsset {...this.props}/>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Assets)
