import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Players from "./Players/index";
import StartOptions from "./StartOptions/index";
import CheckList from "../CheckList";

import { setValidationMessages } from "./Actions/actions";

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOverlay: false
        };
        this.validateNames = this.validateNames.bind(this);
        this.showOverlay = this.showOverlay.bind(this);
        this.hideOverlay = this.hideOverlay.bind(this);
    }

    showStartOptionsList(validation) {
        const { setValidation } = this.props;
        setValidation(validation);
        if (validation.length === 0) {
            this.showOverlay();
        }
    }

    validateNames() {
        const { players } = this.props;
        const messages = [];
        players.forEach(player => {
            if (player.name === "") messages.push("Имя не может быть пустым");
            if (player.name !== "" && player.name.length < 3) messages.push("Имя должно содержать минимум 3 символа");
        });
        return [...new Set(messages)];
    }

    showOverlay() {
        this.setState({ isOverlay: true });
    }

    hideOverlay() {
        this.setState({ isOverlay: false });
    }

    render() {
        const { players, setPage, clearValidation } = this.props;

        const validation = this.validateNames(players);
        return (
            <div className="css-options">
                {/* {this.state.isOverlay && (
                    <div className="css-overlay-container">
                        <div className="css-overlay" />
                        <div className="css-overlay-content">
                            <CheckList handleBack={this.hideOverlay} setPage={setPage} />
                        </div>
                    </div>
                )} */}
                <div className="css-content">
                    <div className="css-options-wrapper">
                        <div className="css-players-list">
                            <Players clearValidation={clearValidation} />
                        </div>
                        <div className="css-start-options-list">
                            <StartOptions />
                        </div>
                    </div>
                </div>
                <div className="css-controls">
                    {/* <button className="css-button">
                            <Link to="/">Правила</Link>
                        </button> */}
                    {/* <button className="css-button" onClick={this.showStartOptionsList.bind(this, validation)}> */}
                    <button className="css-button">
                        <Link to="/game">Старт</Link>
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state.OptionsReducer;
const mapDispatchToProps = dispatch => ({
    setValidation(validationMessages) {
        dispatch(setValidationMessages(validationMessages));
    }
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Options);
