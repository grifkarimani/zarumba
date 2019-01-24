import React, { Component } from "react";

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type
    };
    this.switshType = this.switshType.bind(this);
  }
  switshType() {
    this.setState({
      type: this.state.type === "text" ? "password" : "text"
    });
  }
  render() {
    const {
      placeholder = "",
      onChange,
      value = "",
      icon = "fa-angle-right",
      validation = {
        isValid: true,
        message: ""
      }
    } = this.props;
    const { type } = this.state;
    return (
      <div className="css-text-input-wrapper">
        <i class={`css-icon css-inside fas ${icon}`} />
        {this.props.type === "password" && (
          <i
            class={`css-icon css-pass fas ${
              type === "text" ? "fa-eye" : "fa-eye-slash"
            }`}
            onClick={this.switshType}
          />
        )}
        <input
          className={`css-text-input ${!validation.isValid && "invalid"}`}
          type={type}
          placeholder={placeholder}
        />
        <div className="input-validation">
          {!validation.isValid && (
            <span className="validation-text">{validation.message}</span>
          )}
        </div>
      </div>
    );
  }
}
