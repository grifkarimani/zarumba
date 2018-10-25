import "./sass/main.scss";

import React from "react";
import { createStore, applyMiddleware } from "redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import App from "./components/App";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers.js";
// import reducers from "reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware, thunk)));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="viewport">
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);
