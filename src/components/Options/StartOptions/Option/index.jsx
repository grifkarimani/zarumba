import React from "react";
import remove from "../../../../media/remove.svg";
import add from "../../../../media/add.svg";

class StartOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "disabled"
        };
        this.handleClick = this.handleClick.bind(this);
    }
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
    handleClick() {
        this.setState({
            position: this.state.position === "disabled" ? "active" : "disabled"
        });
    }
    render() {
        const { className, mainLabel, isSelected, selectOption, optionKey, option1, option2, optionWithSetContainer, id } = this.props;
        const { position } = this.state;
        return (
            <div className={["css-start-option", className, position].join(" ")} onClick={this.handleClick}>
                <div className="description">
                    <div className="header">{this.props[position].header}</div>
                    <div className="text">{this.props[position].text}</div>
                </div>
                <div className="icon-container">
                    <i className={`css-icon fab ${this.props.icon} ${position}`} />
                </div>
            </div>
        );
    }
}

export default StartOption;
