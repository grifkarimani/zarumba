import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Rules from "../Rules/index.jsx";
import Options from "../Options/index.jsx";
import Game from "../Game/index.jsx";
import Header from "./Header/index";
import LeftBar from "./LeftBar/index";
import Results from "../Results/index";
import LoginForm from "../LoginForm/index";
import Registration from "../Registration/index";
import PassRecoveryPage from "../PassRecoveryPage/index";

import DashBoard from "../DashBoard/index";

class App extends React.Component {
    render() {
        let history = this.props.history;
        return (
            <div className="css-app">
                <Header />
                <LeftBar />
                <ConnectedRouter history={history}>
                    <div className="css-main-area">
                        <Switch>
                            <Route exact path="/" component={DashBoard} />
                            <Route exact path="/login" component={LoginForm} />
                            <Route exact path="/registration" component={Registration} />
                            <Route exact path="/dashboard" component={DashBoard} />
                            <Route exact path="/rules" component={Rules} />
                            <Route exact path="/options" component={Options} />
                            <Route exact path="/game" component={Game} />
                            <Route exact path="/results" component={Results} />
                            <Route exact path="/pass_recovery" component={PassRecoveryPage} />
                        </Switch>
                    </div>
                </ConnectedRouter>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.AppReducer.loggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
