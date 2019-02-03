import React from "react";

class StartOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.increase = this.increase.bind(this);
    this.reduce = this.reduce.bind(this);
  }
  increase() {
    const { optionKey, setContainer, increase } = this.props;
    const value = setContainer.defaultValue + setContainer.step;
    increase(optionKey, value);
  }
  reduce() {
    const { optionKey, setContainer, reduce } = this.props;
    const value = setContainer.defaultValue - setContainer.step;
    if (value <= 0) return;
    reduce(optionKey, value);
  }
  renderSetContainer() {
    const { increase, setContainer } = this.props;
    return (
      <div className="setContainer">
        <div className="setContainer-controls">
          <div className="setContainer-minus">
            <i className={`css-icon fas fa-minus-square`} onClick={this.reduce} />
          </div>
          <div className="setContainer-value">{this.props.setContainer.defaultValue}</div>
          <div className="setContainer-plus">
            <i className={`css-icon fas fa-plus-square`} onClick={this.increase} />
          </div>
        </div>
      </div>
    );
  }
  handleClick() {
    const currentState = this.props.currentState === "disabled" ? "active" : "disabled";
    const optionKey = this.props.optionKey;
    this.props.changeState(optionKey, currentState);
  }
  render() {
    const {
      className,
      mainLabel,
      isSelected,
      selectOption,
      optionKey,
      option1,
      option2,
      optionWithSetContainer,
      id,
      currentState
    } = this.props;
    return (
      <div className={["css-start-option", className, currentState].join(" ")}>
        <div className="description">
          <div className="header" onClick={this.handleClick}>
            <div className="header-icon-container">
              <i className={`css-icon ${this.props[currentState].icon}`} />
            </div>
            <div className="css-header-text-container">{this.props[currentState].header}</div>
          </div>

          {currentState === "disabled" ? (
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
