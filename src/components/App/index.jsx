import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import Rules from "../Rules/index.jsx";
import Options from "../Options/index.jsx";
import Game from "../Game/index.jsx";
import Header from "./Header/index";
import LeftBar from "./LeftBar/index";
import Results from "../Results/index";

class App extends React.Component {
    render() {
        return (
            <div className="css-app">
                <Header />
                <LeftBar />
                <div className="css-main-area">
                    <Switch>
                        <Route exact path="/" component={Rules} />
                        <Route exact path="/options" component={Options} />
                        <Route exact path="/game" component={Game} />
                        <Route exact path="/results" component={Results} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
