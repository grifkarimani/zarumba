import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { onSetValue } from "./Actions/actions.js";

class Registration extends Component {
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
        let data = this.props.newUserData;
        if (data.pass === data.confirmPass) {
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
    }
    render() {
        const { serverMess = "sdfvsdfvvsdfvvdfv cascasdc casdcasasdc casc casdcasdc dcrcdcsybda bgs vbasfd vgsdf v", newUserData } = this.props;
        return (
            <div className="css-registration">
                {serverMess && <div className="server-mess">{serverMess}</div>}
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

                <div>
                    <p className="message">У меня есть учетная запись</p>
                    <button className="css-button">
                        <Link className="css-link" to="/login" onClick={this.handleClick}>
                            Войти
                        </Link>
                    </button>
                </div>

                <button className="css-button">
                    <Link className="css-link" to="/dashboard" onClick={this.handleClick}>
                        Гостевой режим
                    </Link>
                </button>
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
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration);
