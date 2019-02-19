import React, {Component} from "react";
import "./App.less";
import {BoardPage} from "./modules/board/BoardPage";
import {BrowserRouter, Route} from "react-router-dom";
import {LoginPage} from "./modules/login/LoginPage";
import Provider from "react-redux/es/components/Provider";
import {boardStore} from "./AppStore";
import {BoardTest} from "./modules/test/board/BoardTest";
require('core-js'); //for IE11
require('string.prototype.startswith'); //for IE11

export default class App extends Component {
    render() {
        const routes = [
            <Route key="index" exact path='/' component={BoardPage}/>,
            <Route key="login" exact path='/login' component={LoginPage}/>
        ];

        if (process.env.NODE_ENV !== "production") {
            routes.push(<Route key="testBoard" exact path='/testBoard' component={BoardTest}/>)
        }

        return (
            <Provider store={boardStore}>
                <BrowserRouter>
                    <div>
                        {routes}
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}