import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { onSetValue } from "./Actions/actions.js";
import { push } from "connected-react-router";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.setState({
            nameIsValid: false,
            emailIsValid: false,
            passIsValid: false,
            confirmPassIsValid: false,

            loginAtempt: false
        });
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleChange(key, e) {
        const { setValueByName } = this.props;
        setValueByName(e.target.value, key);
    }
    validateData() {
        const { newUserData } = this.props;
        let name = newUserData.name;
        let email = newUserData.email;
        let pass = newUserData.pass;
        let confirmPass = newUserData.confirmPass;
        this.setState({
            nameIsValid: !!name,
            emailIsValid: !!email,
            passIsValid: !!pass,
            confirmPassIsValid: !!confirmPass,
            loginAtempt: true
        });
        return {
            nameIsValid: !!name,
            emailIsValid: !!email,
            passIsValid: !!pass,
            confirmPassIsValid: !!confirmPass,
            loginAtempt: true
        };
    }
    async onSubmit(e) {
        e.preventDefault();
        let validation = await this.validateData();
        let data = this.props.newUserData;
        if (data.pass === data.confirmPass) {
            let url = "./main.php";
            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, false);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
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
    render() {
        const { serverMess = "", newUserData } = this.props;
        return (
            <div className="css-registration">
                <div className="css-form">
                    <form className="css-registration-form" action="">
                        <input
                            className="css-text-input"
                            type="text"
                            placeholder="*Имя..."
                            onChange={this.handleChange.bind(this, "name")}
                            value={newUserData.name}
                        />
                        <input
                            className="css-text-input"
                            type="email"
                            placeholder="*мояпочта@почта.бай..."
                            onChange={this.handleChange.bind(this, "email")}
                            value={newUserData.email}
                        />
                        <input
                            className="css-text-input"
                            type="password"
                            placeholder="*Пароль..."
                            onChange={this.handleChange.bind(this, "pass")}
                            value={newUserData.pass}
                        />
                        <input
                            className="css-text-input"
                            type="password"
                            placeholder="*Еще раз пароль..."
                            onChange={this.handleChange.bind(this, "confirmPass")}
                            value={newUserData.confirmPass}
                        />
                        <button className="css-button" onClick={this.onSubmit}>
                            Регистрация
                        </button>
                    </form>
                    <div className="contol-group">
                        <button className="css-button">
                            <Link className="css-link" to="/login" onClick={this.handleClick}>
                                Войти
                            </Link>
                        </button>

                        <button className="css-button">
                            <Link className="css-link" to="/dashboard" onClick={this.handleClick}>
                                Гостевой режим
                            </Link>
                        </button>
                    </div>
                </div>
                {serverMess && <div className="server-mess">{serverMess}</div>}
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
        changePage(path) {
            dispatch(push(path));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration);
