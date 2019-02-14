import React from "react";
import ReactDOM from "react-dom";
import App, {containerKeys} from "./App";
import {Provider} from "react-redux"
import {bobbyStore} from "./AppStore";

const renderApp = (App) => {
    let el = document.getElementById("app");
    ReactDOM.render(<Provider store={bobbyStore}><App/></Provider>, el);
};

if (module.hot) {
    module.hot.accept("./App", () => {
        const NextApp = require("./App").default;
        renderApp(NextApp);
    });
}
renderApp(App);

