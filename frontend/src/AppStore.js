import {applyMiddleware, combineReducers, createStore} from "redux";
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import {bobOilTableReducer} from "./containers/kanban/KanbanBoardRedux";

const loggerMiddleware = createLogger();

let _store;
const rootReducer = combineReducers({
    bobOilTableReducer
});

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

export const bobbyStore = _store;