import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {
    Panel, Button
} from 'react-bootstrap';
import bows from 'bows';

import CreateBrief from '../../briefs/components/create';

const logger = bows('menu.jsx');

const mapStateToProps = (state) => ({
    briefs: state.briefs
})


class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {showModal : false};
    }
    close(){
        this.setState({showModal: false})
    }
    open(){
        this.setState({showModal: true});
    }
    render(){
        return (
            <div>
                <Panel header="Account" eventKey="1">
                    <Link to="/account/">Details</Link>
                    <Link to="/account/">Contact</Link>
                    <Link to="/account/">Security</Link>
                    <Link to="/account/">Preferences</Link>
                </Panel>
                <Panel header="Briefs" eventKey="2">
                    {this.props.briefs.map(function(brief, i){
                        return <Link key={i} to={`/briefs/${brief.slug}/`}>{brief.title}</Link>
                    })}
                    <p>&nbsp;</p>
                    <Button bsStyle={'info'} bsSize={'xsmall'} onClick={this.open.bind(this)}>
                        Create a brief ...
                    </Button>
                </Panel>
                <CreateBrief show={this.state.showModal} onHide={this.close.bind(this)}/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(Menu)
