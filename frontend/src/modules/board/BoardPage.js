//@flow

import React from "react";
import {Header} from "../header/Header";
import {Board} from "./components/board/Board";

export const BoardPage = () => (
    <React.Fragment>
        <header><Header/></header>
        <article><Board/></article>
    </React.Fragment>
);
