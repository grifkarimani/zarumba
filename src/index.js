import "./sass/main.scss";

import React from "react";
import { createStore, applyMiddleware } from "redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import App from "./components/App";
import thunk from "redux-thunk";
import createRootReducer from "./reducers/reducers.js";
import { composeWithDevTools } from "redux-devtools-extension";

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
// const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware, thunk)));
const store = createStore(
    createRootReducer(history), // root reducer with router state
    composeWithDevTools(applyMiddleware(middleware, thunk))
);

ReactDOM.render(
    <Provider store={store}>
        {/* <ConnectedRouter history={history}> */}
        <div className="viewport">
            <App history={history} />
        </div>
        {/* </ConnectedRouter> */}
    </Provider>,
    document.getElementById("root")
);
