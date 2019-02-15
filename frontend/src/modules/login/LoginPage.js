// @flow

import React, {Component} from "react";
import {LoginForm} from "./LoginForm";
import "./LoginPage.less";

export class LoginPage extends Component {
    render() {
        return (<div className="login-page"><LoginForm/></div>);
    }
}