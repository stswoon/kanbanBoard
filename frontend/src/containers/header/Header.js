// @flow

import React, {Component} from "react";
import "./Header.less";
import {Button} from "antd";
import {strings} from "../../services/strings";

export class Header extends Component<Props, State> {
   render() {
        const title = (
            <div className="header__title">
                <h3 className="header__title_name">Kanban Board</h3>
                <span className="header__title_version">v0.0.1</span>
            </div>
        );

        const controls = (
            <div className="header__controls">
                <Button icon="github" onClick={this.redirectToGitHub}>{strings.header.goToGitHub}</Button>
                <Button icon="logout" onClick={this.logout}>{strings.header.logout}</Button>
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
    logout = () => console.log("todo"); //todo
}

type Props = {};
type State = { //https://flow.org/en/docs/react/components/
    };
