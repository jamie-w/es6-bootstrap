import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
    onCreateUserClick: (username) => dispatch({
        type: 'CREATE_USER', username
    })
})

class CreateUser extends React.Component{
    render(){
        return (
            <div>
                <input ref="username" placeholder="Username"/>
                <button onClick={() => this.props.onCreateUserClick(this.refs.username.value)}>
                    Create!
                </button>
            </div>
        );
    }
}

export default connect(
    ()=>({}),
    mapDispatchToProps
)(CreateUser);
