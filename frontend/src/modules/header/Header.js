// @flow

import React, {Component} from "react";
import "./Header.less";
import {Button, Icon, Spin} from "antd";
import {strings} from "../shared/services/strings";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loginActions} from "../login/LoginFormRedux";
import {Redirect} from "react-router-dom";

class Header extends Component<Props, State> {
    render() {
        if (!this.props.userEmail) {
            return (<Redirect to={"/login"}/>);
        }


        const title = (
            <div className="header__title">
                <h3 className="header__title_name">{strings.header.title}</h3>
                <span className="header__title_version">{strings.header.version}</span>
            </div>
        );

        const loaderIcon = <Icon type="loading" style={{fontSize: 24}} spin/>;
        const loader = <div className="header__control">{strings.header.loader}<Spin indicator={loaderIcon}/></div>;

        const controls = (
            <div className="header__controls">
                {this.props.loading && loader}
                <Button icon="github" onClick={this.redirectToGitHub}
                        className="header__control">{strings.header.goToGitHub}</Button>
                <span className="header__control">{strings.header.loggedAs + this.props.userEmail}</span>
                <a href="#" className="header__control" icon="logout" onClick={this.logout}>{strings.header.logout}</a>
            </div>
        );

        return (
            <div className="header">
                {title}
                {controls}
            </div>
        );
    }

    redirectToGitHub = () => window.location.href = "https://github.com/stswoon/kanbanBoard";
    logout = () => this.props.actions.logout();
}

type Props = {};
type State = {};//https://flow.org/en/docs/react/components/

function mapStateToProps(state) {
    const {loginReducer, boardReducer} = state;
    return {
        userEmail: loginReducer.userEmail,
        loading: boardReducer.loading
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(loginActions, dispatch)};
}

const connected = connect(mapStateToProps, mapDispatchToProps)(Header);
export {connected as Header};