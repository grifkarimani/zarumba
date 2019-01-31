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
        const {} = this.props;
        return (
            <div className="setContainer">
                <div className="setContainer-controls">
                    <div className="setContainer-plus">
                        <i className={`css-icon fas fa-minus-square`} />
                    </div>
                    <div className="setContainer-value">{this.props.setContainer.defaultValue}</div>
                    <div className="setContainer-minus">
                        <i className={`css-icon fas fa-plus-square`} />
                    </div>
                </div>
            </div>
        );
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
            <div className={["css-start-option", className, position].join(" ")}>
                <div className="description">
                    <div className="header" onClick={this.handleClick}>
                        <div className="header-icon-container">
                            <i className={`css-icon ${this.props[position].icon}`} />
                        </div>
                        <div className="css-header-text-container">{this.props[position].header}</div>
                    </div>

                    {position === "disabled" ? (
                        <div className="text">{this.props.hint}</div>
                    ) : this.props.setContainer ? (
                        this.renderSetContainer()
                    ) : (
                        <div className="text">{this.props.hint}</div>
                    )}
                </div>
            </div>
        );
    }
}

export default StartOption;
