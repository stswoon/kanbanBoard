import React, {Component} from "react";
import "./App.less";
import {KanbanBoardPage} from "./modules/board/KanbanBoardPage";
import {BrowserRouter, Route} from "react-router-dom";
import {IndexPage} from "./modules/index/IndexPage";
import {LoginPage} from "./modules/login/LoginPage";
import {PrivateRoute} from "./modules/shared/PrivateRoute";
import Provider from "react-redux/es/components/Provider";
import {bobbyStore} from "./AppStore";

export default class App extends Component {
    render() {
        return (
            <Provider store={bobbyStore}>
                <BrowserRouter>
                    <div>
                        <PrivateRoute exact path='/' component={IndexPage}/>
                        <Route exact path='/login' component={LoginPage}/>
                        <PrivateRoute exact path='/board' component={KanbanBoardPage}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}