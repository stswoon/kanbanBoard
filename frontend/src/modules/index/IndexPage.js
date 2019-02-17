import React from "react";
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

class IndexPage extends React.Component {
    render() {
        if (this.props.authenticated) {
            let to = this.props.from || "/board";
            return <Redirect to={to}/>
        } else {
            return <Redirect to="/login"/>
        }
    }
}

function mapStateToProps(state) {
    const {loginReducer} = state;
    return {authenticated: !!loginReducer.userEmail};
}

const connected = connect(mapStateToProps)(IndexPage);
export {connected as IndexPage};