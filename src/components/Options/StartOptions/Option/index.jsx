import React from "react";
import remove from "../../../../media/remove.svg";
import add from "../../../../media/add.svg";

class StartOption extends React.Component {
    renderSetContainer() {
        const { setLabel, onIncrease, isSelected, optionValue, optionKey, setContainer, onReduce } = this.props;
        return isSelected ? (
            <div className="css-set-container">
                <div className="css-set-container-label">{setLabel}</div>
                <div className="css-set-container-controls">
                    <img className="css-controll-button" src={remove} alt="" onClick={onReduce.bind(this, optionKey)} />
                    <div className="css-css-Ovalue-value">{optionValue}</div>
                    <img className="css-controll-button" src={add} alt="" onClick={onIncrease.bind(this, optionKey)} />
                </div>
            </div>
        ) : null;
    }
    render() {
        const { className, mainLabel, isSelected, selectOption, optionKey, option1, option2, optionWithSetContainer, id } = this.props;
        return (
            <div className={["css-start-option", className].join(" ")}>
                <div className="css-start-option-content">
                    <div className="css-start-option-label">{mainLabel}</div>
                    <div className="css-switch">
                        <label className="switch" htmlFor={id}>
                            <input type="checkbox" checked={isSelected} onChange={selectOption.bind(this, optionKey, !isSelected)} id={id} />
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className={["css-start-option-content-item left", isSelected ? "selected" : ""].join(" ")}>{isSelected ? option1 : option2}</div>
                    {optionWithSetContainer ? this.renderSetContainer() : null}
                </div>
            </div>
        );
    }
}

export default StartOption;
