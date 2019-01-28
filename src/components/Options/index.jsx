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
        debugger;
        e.preventDefault();
        if (!this.validateNames().length) {
            this.props.history.push("/game");
        }
    }
    render() {
        const { clearValidation } = this.props;
        return (
            <div className="css-options-page">
                <div className="css-form">
                    <div className="input-group">
                        <div className="left-pannel">
                            <Players clearValidation={clearValidation} />
                        </div>
                        <div className="right-pannel">
                            <StartOptions />
                        </div>
                    </div>

                    <div className="contol-group">
                        <button className="css-basis-button" onClick={this.handleStart.bind(this)}>
                            Старт
                        </button>
                    </div>
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
