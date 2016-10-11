import React from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Accordion, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

const mapStateToProps = (state) => ({
    briefs: state.briefs
})

class Menu extends React.Component{

    render(){
        return (
            <Accordion defaultActiveKey="2">
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
                    <span className={'menu-cta'}><i className={'fa fa-plus'}></i></span>
                </Panel>
            </Accordion>
        );
    }
}

export default connect(
    mapStateToProps
)(Menu)
