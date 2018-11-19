import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { onSetValue } from "./Actions/actions.js";

class LoginForm extends Component {
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
        let data = this.props.loginUserData;
        let url = "./main.php";
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url, false);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhr.onload = () => {
            if (xhr.status === 200) {
                console.log("xhr.responseText", xhr.responseText);
                // console.log(JSON.parse(xhr.responseText));
            } else {
                console.log("status", xhr.status);
                console.log("statusText", xhr.statusText);
            }
        };
        console.log("JSON.stringify(data)", "data=" + JSON.stringify(data));
        xhr.send("data=" + JSON.stringify(data));
    }
    render() {
        const { serverMess = "sdfvsdfvvsdfvvdfv cascasdc casdcasasdc casc casdcasdc dcrcdcsybda bgs vbasfd vgsdf v", loginUserData } = this.props;
        return (
            <div className="css-login">
                {serverMess && <div className="server-mess">{serverMess}</div>}
                <form className="css-login-form" action="">
                    <input
                        className="css-text-input"
                        type="text"
                        placeholder="Email...*"
                        onChange={this.handleChange.bind(this, "email")}
                        value={loginUserData.email}
                    />
                    <input
                        className="css-text-input"
                        type="password"
                        placeholder="Password...*"
                        onChange={this.handleChange.bind(this, "pass")}
                        value={loginUserData.pass}
                    />
                    <Link className="css-link forgotPass" to="/pass_recovery" onClick={this.handleClick}>
                        Я забыл пароль...
                    </Link>
                    <button className="css-button" onClick={this.onSubmit}>
                        Войти
                    </button>
                </form>
                <div>
                    <p>У меня нет учетной записи</p>
                    <button className="css-button">
                        <Link className="css-link" to="/registration" onClick={this.handleClick}>
                            Регистрация
                        </Link>
                    </button>
                </div>
                <button className="css-button">
                    <Link className="css-link" to="/rules" onClick={this.handleClick}>
                        Гостевой режим
                    </Link>
                </button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log("mapStateToProps", state.LoginReducer);
    return {
        loginUserData: state.LoginReducer
    };
};
const mapDispatchToProps = dispatch => {
    return {
        setValueByName(value, key) {
            dispatch(onSetValue(value, key));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);
