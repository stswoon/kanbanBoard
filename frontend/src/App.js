import React, {Component} from "react";
import "./App.less";
import {BoardPage} from "./modules/board/BoardPage";
import {BrowserRouter, Route} from "react-router-dom";
import {IndexPage} from "./modules/index/IndexPage";
import {LoginPage} from "./modules/login/LoginPage";
import {PrivateRoute} from "./modules/privateroute/PrivateRoute";
import Provider from "react-redux/es/components/Provider";
import {boardStore} from "./AppStore";

export default class App extends Component {
    render() {
        return (
            <Provider store={boardStore}>
                <BrowserRouter>
                    <div>
                        <PrivateRoute exact path='/' component={IndexPage}/>
                        <Route exact path='/login' component={LoginPage}/>
                        <PrivateRoute exact path='/board' component={BoardPage}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}