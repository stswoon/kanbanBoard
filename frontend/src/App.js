import React, {Component} from "react";
import "./App.less";
import {BoardPage} from "./modules/board/BoardPage";
import {BrowserRouter, Route} from "react-router-dom";
import {LoginPage} from "./modules/login/LoginPage";
import Provider from "react-redux/es/components/Provider";
import {boardStore} from "./AppStore";

export default class App extends Component {
    render() {
        return (
            <Provider store={boardStore}>
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={BoardPage}/>
                        <Route exact path='/login' component={LoginPage}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}