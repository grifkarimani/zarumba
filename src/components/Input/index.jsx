import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class TextInput extends Component {
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
  handleChange(e) {
    const { onChange, inputKey } = this.props;
    onChange(inputKey, e.target.value);
  }
  isEqual() {
    const { formName, inputKey, equal } = this.props;
    if (formName === "registrationForm" && (inputKey === "password" || inputKey === "confirmPassword")) {
      return equal ? "equal" : "notEqual";
    }
  }
  render() {
    const { type } = this.state;
    const { inputKey, placeholder = "", onChange, value = "", icon = "fa-angle-right", validation = "required", maxLength = 100, equal } = this.props;

    return (
      <div className={`css-text-input-wrapper ${this.isEqual()}`}>
        <i className={`css-icon css-inside fas ${icon}`} />
        {this.props.type === "password" && <i className={`css-icon css-pass fas ${type === "text" ? "fa-eye" : "fa-eye-slash"}`} onClick={this.switshType} />}
        <input className={`css-text-input ${validation && "invalid"} `} type={type} placeholder={placeholder} onChange={this.handleChange.bind(this)} value={value} maxLength={maxLength} />
        <div className="input-validation">{validation && <span className="validation-text">{validation}</span>}</div>
      </div>
    );
  }
}
TextInput.propTypes = {
  type: PropTypes.string.isRequired
};
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput);
