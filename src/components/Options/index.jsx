import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Players from "./Players/index";
import StartOptions from "./StartOptions/index";

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = { startIsVisible: false };
        this.validateNames = this.validateNames.bind(this);
    }

    validateNames() {
        const { players } = this.props;
        const messages = [];
        players.forEach(player => {
            if (player.name === "") messages.push("Имя не может быть пустым");
        });
        return [...new Set(messages)];
    }
    handleStart(e) {
        e.preventDefault();
        if (!this.validateNames().length) {
            this.props.history.push("/game");
        }
    }
    render() {
        const { clearValidation } = this.props;
        return (
            <div className="css-options">
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
                    <Link to="/game" className="css-button" onClick={this.handleStart.bind(this)}>
                        Старт
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => state.OptionsReducer;
const mapDispatchToProps = dispatch => ({});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Options));
