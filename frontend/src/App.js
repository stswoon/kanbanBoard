import React, {Component} from "react";
import "./App.css";
import {KanbanBoardPage} from "./containers/kanban/KanbanBoardPage";

export default class App extends Component {
    render() {
        return (<KanbanBoardPage/>);
    }
}