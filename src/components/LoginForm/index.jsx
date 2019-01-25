import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { onSetValue, onLoginSuccess, onLoginFailure, ONFAKEENTER } from "./Actions/actions.js";
import requestBuilder from "../../helpers/requestBuilder";
import TextInput from "../Input";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.onSubmit = this.onSubmit.bind(this);
    }
    // handleChange(key, e) {
    //     const { setValueByName } = this.props;
    //     setValueByName(e.target.value, key);
    // }
    // onSubmit(e) {
    //     e.preventDefault();
    //     let request = new requestBuilder("./main.php", "POST", "login", this.props.loginUserData);
    //     request
    //         .sendRequest()
    //         .then(response => {
    //             console.log("response", response);
    //             return JSON.parse(response);
    //         })
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    //     // let data = this.props.loginUserData;

    //     // let xhr = new XMLHttpRequest();
    //     // xhr.open("POST", url, false);
    //     // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    //     // xhr.onload = () => {
    //     //     if (xhr.status === 200 && xhr.statusText === "OK") {
    //     //         let data = JSON.parse(xhr.response);
    //     //         if (data.status === "OK") {
    //     //             console.log("xhr", xhr);
    //     //             if (data.status === "OK") {
    //     //                 this.props.loginSuccess(data);
    //     //                 this.props.changePage("/rules");
    //     //             } else {
    //     //             }
    //     //             this.props.loginSuccess(data);
    //     //         } else {
    //     //             this.props.loginFailure(data);
    //     //         }
    //     //     } else {
    //     //         console.log("xhr", xhr);
    //     //     }
    //     // };
    //     // xhr.send("data=" + JSON.stringify(data));
    // }
    // handleClick(e) {
    //     e.preventDefault();
    //     this.props.FAKEENTER();
    //     this.props.changePage("/rules");
    // }
    handleOverlayClick(formKey) {
        const { setForm } = this.props;
        setForm(formKey);
    }
    render() {
        const { serverMess = "", loginUserData, isActive } = this.props;
        return (
            <div className={`css-form login-form ${isActive ? "" : "disabled"}`}>
                {!isActive && <div className="css-form-overlay" onClick={this.handleOverlayClick.bind(this, "login")} />}
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
                    <TextInput
                        type="password"
                        placeholder="*Пароль..."
                        onChange={this.handleChange}
                        value=""
                        icon="fa-key"
                        required={true}
                        validation={{ isValid: true, message: "" }}
                    />
                    <div className="css-pass-recovery-link">
                        <Link className="css-link" to="/pass_recovery">
                            <i class="css-icon fas fa-question-circle" />
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
        loginSuccess(data) {
            dispatch(onLoginSuccess(data));
        },
        loginFailure(data) {
            dispatch(onLoginFailure(data));
        },
        changePage(path) {
            dispatch(push(path));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
