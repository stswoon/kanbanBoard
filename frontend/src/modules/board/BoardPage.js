//@flow

import React, {Component} from "react";
import {Header} from "../header/Header";
import {Board} from "./components/board/Board";

export class BoardPage extends Component {
    render() {
        return (
            <React.Fragment>
                <header><Header/></header>
                <article><Board/></article>
            </React.Fragment>
        );
    }
}