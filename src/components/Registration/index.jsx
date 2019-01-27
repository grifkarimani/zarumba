import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import {
  onSetValue,
  onLoginSuccess,
  onLoginFailure,
  onSetValidationMessage,
  onCleanForm
} from "./Actions/actions.js";
import requestBuilder from "../../helpers/requestBuilder";
import TextInput from "../Input";
import { policy } from "../../helpers/policy.js";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.formName = "registrationForm";
    this.state = {
      password: "",
      confirmPassword: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidUpdate(prevProps) {
    const { cleanForm } = this.props;
    if (this.props.isActive !== prevProps.isActive) {
      cleanForm();
    }
  }
  handleChange(key, value) {
    const { setValueByName } = this.props;
    console.log(key);
    console.log(value);
    this.setState({
      [key]: value
    });
    setValueByName(value, key);
  }
  checkByPolicy(key, value, policy) {
    const { setValidationMessage } = this.props;
    const isRequired = policy.required;
    if (!value && isRequired) {
      setValidationMessage(key, policy.requiredMessage);
      return false;
    }
    const minLength = policy.minLength;
    if (value && value.length < policy.minLength) {
      setValidationMessage(key, policy.minLengthMessage);
      return false;
    }
    const regExpValue = policy.regExpValue ? policy.regExpValue : null;
    if (value && regExpValue) {
      const isValid = regExpValue.test(value);
      if (isValid) {
        return true;
      } else {
        setValidationMessage(key, policy.regExpValueMessage);
        return false;
      }
    }
    return true;
  }
  validateForm() {
    const { newUserData } = this.props;
    const namelIsValid = this.checkByPolicy(
      "name",
      newUserData.name.value,
      policy.name
    );
    const emailIsValid = this.checkByPolicy(
      "email",
      newUserData.email.value,
      policy.email
    );
    const passwordIsValid = this.checkByPolicy(
      "password",
      newUserData.password.value,
      policy.password
    );
    const confirmPasswordIsValid = this.checkByPolicy(
      "confirmPassword",
      newUserData.confirmPassword.value,
      policy.password
    );
    const passwordsAreEqual = this.checkEqualsPass();
    return (
      namelIsValid &&
      emailIsValid &&
      passwordIsValid &&
      confirmPasswordIsValid &&
      passwordsAreEqual
    );
  }
  checkEqualsPass() {
    const { password, confirmPassword } = this.state;
    return password === confirmPassword;
  }
  onSubmit() {
    const formIsValid = this.validateForm();
    if (!formIsValid) return;
    console.log("Server REQUEST SEND");
    return;
    let data = this.props.newUserData;
    if (data.pass === data.confirmPass) {
      let url = "./main.php";
      let xhr = new XMLHttpRequest();
      xhr.open("POST", url, false);
      xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded; charset=UTF-8"
      );
      xhr.onload = () => {
        if (xhr.status === 200 && xhr.statusText === "OK") {
          console.log("xhr.responseText", xhr.responseText);
          this.props.changePage("/login");
        } else {
          console.log("status", xhr.status);
          console.log("statusText", xhr.statusText);
        }
      };
      console.log("JSON.stringify(data)", "data=" + JSON.stringify(data));
      xhr.send("data=" + JSON.stringify(data));
    }
  }
  handleOverlayClick(formKey) {
    const { setForm } = this.props;
    setForm(formKey);
  }
  render() {
    const { serverMess = "", newUserData, isActive } = this.props;
    const { password, confirmPassword } = this.state;
    return (
      <div
        className={`css-form registration-form ${isActive ? "" : "disabled"}`}
      >
        {!isActive && (
          <div
            className="css-form-overlay"
            onClick={this.handleOverlayClick.bind(this, "registration")}
          />
        )}
        <div className="input-group">
          <TextInput
            type="text"
            inputKey="name"
            placeholder="*Имя..."
            onChange={this.handleChange}
            value={newUserData.name.value}
            icon="fa-user"
            policy={policy.email}
            validation={newUserData.name.validation}
            formName={this.formName}
          />
          <TextInput
            type="text"
            inputKey="email"
            placeholder="*Электронная почта..."
            onChange={this.handleChange}
            value={newUserData.email.value}
            icon="fa-at"
            required={true}
            validation={newUserData.email.validation}
            formName={this.formName}
          />
          <TextInput
            type="password"
            inputKey="password"
            placeholder="*Пароль..."
            onChange={this.handleChange}
            value={newUserData.password.value}
            icon="fa-key"
            required={true}
            validation={newUserData.password.validation}
            formName={this.formName}
            equal={this.checkEqualsPass()}
          />
          <TextInput
            type="password"
            inputKey="confirmPassword"
            placeholder="*Пароль еще раз..."
            onChange={this.handleChange}
            value={newUserData.confirmPassword.value}
            icon="fa-key"
            required={true}
            validation={newUserData.confirmPassword.validation}
            formName={this.formName}
            equal={this.checkEqualsPass()}
          />
        </div>
        <div className="contol-group">
          <button className="css-basis-button" onClick={this.onSubmit}>
            Регистрация
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    newUserData: state.RegistrationReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setValueByName(value, key) {
      dispatch(onSetValue(value, key));
    },
    setValidationMessage(key, message) {
      dispatch(onSetValidationMessage(key, message));
    },
    changePage(path) {
      dispatch(push(path));
    },
    cleanForm() {
      dispatch(onCleanForm());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
