// @flow

import React, {Component} from "react";
import "./Header.less";

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
                <span>go to github</span>
                <span>logout</span>
            </div>
        );

        return (
            <div className="bob-header">
                {title}
                {controls}
            </div>
        );
    }
}

type Props = {};
type State = { //https://flow.org/en/docs/react/components/
    };
