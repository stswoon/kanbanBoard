// @flow

import React, {Component} from "react";
import {Button} from "antd";
import {strings} from "../../services/strings";

export class LoginPage extends Component {
    render() {

        return (
            <div className="header">
                <Button onClick={this.login}>Login</Button>
            </div>
        );
    }

    login = () => {
        localStorage.setItem("login", "true");
    }

}