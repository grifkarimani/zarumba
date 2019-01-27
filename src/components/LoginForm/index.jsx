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

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.formName = "loginForm";
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidUpdate(prevProps) {
    const { cleanForm } = this.props;
    if (this.props.isActive !== prevProps.isActive) {
      cleanForm();
    }
  }
  componentWillUnmount() {
    const { cleanForm } = this.props;
    cleanForm();
  }
  handleChange(key, value) {
    const { setValueByName } = this.props;
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
    const { loginUserData } = this.props;
    const emailIsValid = this.checkByPolicy(
      "email",
      loginUserData.email.value,
      policy.email
    );
    const passwordIsValid = this.checkByPolicy(
      "password",
      loginUserData.password.value,
      policy.password
    );

    return emailIsValid && passwordIsValid;
  }
  onSubmit() {
    const formIsValid = this.validateForm();
    if (!formIsValid) return;
    console.log("Server REQUEST SEND");
    return;
    let request = new requestBuilder(
      "./main.php",
      "POST",
      "login",
      this.props.loginUserData
    );
    request
      .sendRequest()
      .then(response => {
        console.log("response", response);
        return JSON.parse(response);
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    // let data = this.props.loginUserData;

    // let xhr = new XMLHttpRequest();
    // xhr.open("POST", url, false);
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    // xhr.onload = () => {
    //     if (xhr.status === 200 && xhr.statusText === "OK") {
    //         let data = JSON.parse(xhr.response);
    //         if (data.status === "OK") {
    //             console.log("xhr", xhr);
    //             if (data.status === "OK") {
    //                 this.props.loginSuccess(data);
    //                 this.props.changePage("/rules");
    //             } else {
    //             }
    //             this.props.loginSuccess(data);
    //         } else {
    //             this.props.loginFailure(data);
    //         }
    //     } else {
    //         console.log("xhr", xhr);
    //     }
    // };
    // xhr.send("data=" + JSON.stringify(data));
  }
  handleOverlayClick(formKey) {
    const { setForm } = this.props;
    setForm(formKey);
  }
  render() {
    console.log(this.props);
    const { serverMess = "", loginUserData, isActive } = this.props;
    return (
      <div className={`css-form login-form ${isActive ? "" : "disabled"}`}>
        {!isActive && (
          <div
            className="css-form-overlay"
            onClick={this.handleOverlayClick.bind(this, "login")}
          />
        )}
        <div className="input-group">
          <TextInput
            type="text"
            inputKey="email"
            placeholder="Электронная почта..."
            onChange={this.handleChange}
            value={loginUserData.email.value}
            icon="fa-at"
            policy={policy.email}
            validation={loginUserData.email.validation}
            formName={this.formName}
          />
          <TextInput
            type="password"
            inputKey="password"
            placeholder="*Пароль..."
            onChange={this.handleChange}
            value={loginUserData.password.value}
            icon="fa-key"
            policy={policy.password}
            validation={loginUserData.password.validation}
            formName={this.formName}
          />
          <div className="css-pass-recovery-link">
            <Link className="css-link" to="/pass_recovery">
              <i className="css-icon fas fa-question-circle" />
              <span className="linkText">Я забыл пароль...</span>
            </Link>
          </div>
        </div>
        <div className="contol-group">
          <button className="css-basis-button" onClick={this.onSubmit}>
            Войти
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loginUserData: state.LoginReducer,
    serverMess: state.AppReducer.serverMess
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
    loginSuccess(data) {
      dispatch(onLoginSuccess(data));
    },
    loginFailure(data) {
      dispatch(onLoginFailure(data));
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
)(LoginForm);
