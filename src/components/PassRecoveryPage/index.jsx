import React, { Component } from "react";
import { connect } from "react-redux";
import { onSetValue } from "./Actions/actions.js";
import { Link } from "react-router-dom";
import { push } from "connected-react-router";
import TextInput from "../Input";

class PassRecoveryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(key, e) {
    const { setValueByName } = this.props;
    setValueByName(e.target.value, key);
  }
  onSubmit(e) {
    e.preventDefault();

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
        this.props.changePage("/login");
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
                placeholder="*Электронная почта..."
                onChange={this.handleChange}
                value=""
                icon="fa-at"
                required={true}
                validation={{ isValid: true, message: "" }}
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
    changePage(path) {
      dispatch(push(path));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PassRecoveryPage);
