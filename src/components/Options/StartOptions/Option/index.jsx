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
                    <div className="header">
                        <div className="header-icon-container">
                            <i className={`css-icon fas ${this.props[position].icon}`} />
                        </div>
                        <div className="css-header-text-container">{this.props[position].header}</div>
                    </div>

                    {position === "disabled" && <div className="text">{this.props[position].text}</div>}
                    {position === "active" && this.props.setContainer && (
                        <div className="setContainer">
                            {/* <div className="setContainer-title">{this.props.setContainer.setLabel}</div> */}
                            <div className="setContainer-controls">
                                <div className="setContainer-plus">
                                    <i className={`css-icon fas fa-plus-circle`} />
                                </div>
                                <div className="setContainer-value">{this.props.setContainer.defaultValue}</div>
                                <div className="setContainer-minus">
                                    <i className={`css-icon fas fa-minus-circle`} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default StartOption;
