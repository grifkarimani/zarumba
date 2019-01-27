import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { push } from "connected-react-router";
import {
  onSetValue,
  onSetValidationMessage,
  onCleanForm
} from "./Actions/actions.js";
import TextInput from "../Input";
import { policy } from "../../helpers/policy.js";

class PassRecoveryPage extends Component {
  constructor(props) {
    super(props);
    this.formName = "passwordRecoveryForm";
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    const { passRecoveryUserData } = this.props;
    const emailIsValid = this.checkByPolicy(
      "email",
      passRecoveryUserData.email.value,
      policy.email
    );
    return emailIsValid;
  }
  onSubmit() {
    const formIsValid = this.validateForm();
    if (!formIsValid) return;
    console.log("Server REQUEST SEND");
    this.props.history.push("/enter");
    return;
    // this.props.history.push("/recoverySuccess");
    // return;

    console.log("recovery");
    let data = this.props.passRecoveryUserData;
    let url = "./main.php";
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    xhr.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );
    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log("xhr.responseText", xhr);
        console.log("xhr.response.status", xhr.response);
        // console.log(JSON.parse(xhr.responseText));

        console.log("Success");
        this.props.changePage("/enter");
      } else {
        console.log("status", xhr.status);
        console.log("statusText", xhr.statusText);
      }
    };
    console.log("JSON.stringify(data)", "data=" + JSON.stringify(data));
    xhr.send("data=" + JSON.stringify(data));
  }
  render() {
    const {
      serverMess = "vfbnpg;fos fskgjbkfjs bsfgkjb sfjgbfjs'pbj sf'[gpbj sfg",
      passRecoveryUserData
    } = this.props;
    return (
      <div className="css-pass-recovery">
        <div className="css-forms-container">
          <div className="css-form css-passRecovery-form">
            <div className="input-group">
              <TextInput
                type="text"
                inputKey="email"
                placeholder="*Электронная почта..."
                onChange={this.handleChange}
                value={passRecoveryUserData.email.value}
                icon="fa-at"
                policy={policy.email}
                validation={passRecoveryUserData.email.validation}
                formName={this.formName}
              />
            </div>
            <div className="contol-group">
              <button className="css-basis-button" onClick={this.onSubmit}>
                Восстановить
              </button>
            </div>
          </div>
        </div>
        {/* {serverMess && <div className="server-mess">{serverMess}</div>} */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    passRecoveryUserData: state.RecoveryReducer
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
)(PassRecoveryPage);
