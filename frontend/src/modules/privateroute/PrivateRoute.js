import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";

const PrivateRoute = ({component: Component, ...rest}) => {
    let authenticated = rest.authenticated;
    console.debug("PrivateRoute::authenticated=" + authenticated);
    return (
        <Route {...rest} render={
            (props) => {
                console.debug("PrivateRoute::authenticated=" + authenticated);
                return (
                    authenticated
                        ? <Component {...props} />
                        : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
                )
            }
        }/>
    )
};

function mapStateToProps(state) {
    const {loginReducer} = state;
    return {authenticated: !!loginReducer.userEmail};
}

const connected = connect(mapStateToProps)(PrivateRoute);
export {connected as PrivateRoute};