import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import initial from "./data/initial";
import reducer from "./data/reducer";

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initial,
    composeEnhancers(applyMiddleware(thunk))
);
export default store