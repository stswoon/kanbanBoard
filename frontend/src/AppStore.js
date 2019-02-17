import {applyMiddleware, combineReducers, createStore} from "redux";
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import {boardReducer} from "./modules/board/components/board/BoardRedux";
import {loginReducer} from "./modules/login/LoginFormRedux";

const loggerMiddleware = createLogger();

let _store;
const rootReducer = combineReducers({loginReducer, boardReducer});

if (process.env.NODE_ENV === "production") {
    _store = createStore(
        rootReducer,
        applyMiddleware(
            thunkMiddleware
        )
    );
} else {
    _store = createStore(
        rootReducer,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
}

export const boardStore = _store;