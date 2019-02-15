import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const renderApp = (Application) => {
    const el = document.getElementById("app");
    ReactDOM.render(<Application/>, el);
};

if (module.hot) {
    module.hot.accept("./App", () => {
        const NextApp = require("./App").default;
        renderApp(NextApp);
    });
}
renderApp(App);

