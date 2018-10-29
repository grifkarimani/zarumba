import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Players from "./Players/index";
import StartOptions from "./StartOptions/index";

import { setValidationMessages } from "./Actions/actions";

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.validateNames = this.validateNames.bind(this);
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
    handleClick() {
        console.log("handleClickobject");
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
