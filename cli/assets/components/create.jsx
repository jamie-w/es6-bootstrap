import React from 'react';
import {
    Col, Tabs, Tab, FormGroup, FormControl, InputGroup, DropdownButton, Dropdown, MenuItem, Button
} from 'react-bootstrap';

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

export default CreateAsset
