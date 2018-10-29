import React from "react";
import remove from "../../../../media/remove.svg";
import add from "../../../../media/add.svg";

class StartOption extends React.Component {
    renderSetContainer() {
        const { setLabel, removeHandler, addHandler, optionIsSelected, optionValue } = this.props;
        return !optionIsSelected ? (
            <div className="css-set-container">
                <div className="css-set-container-label">{setLabel}</div>
                <div className="css-set-container-controls">
                    <img className="css-controll-button" src={remove} alt="" onClick={removeHandler} />
                    <div className="css-css-Ovalue-value">{optionValue}</div>
                    <img className="css-controll-button" src={add} alt="" onClick={addHandler} />
                </div>
            </div>
        ) : null;
    }
    render() {
        const { className, optionIsSelected, selectOption, optionKey, option1, option2, optionWithSetContainer } = this.props;
        return (
            <div className={["css-start-option", className].join(" ")}>
                <div className="css-start-option-content">
                    <div className="css-switch">
                        <label className="switch">
                            <input type="checkbox" checked={optionIsSelected} onChange={selectOption.bind(this, optionKey, !optionIsSelected)} />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className={["css-start-option-content-item left", optionIsSelected ? "selected" : ""].join(" ")}>
                        {optionIsSelected ? option1 : option2}
                    </div>
                    {optionWithSetContainer ? this.renderSetContainer() : null}
                </div>
            </div>
        );
    }
}

export default StartOption;
