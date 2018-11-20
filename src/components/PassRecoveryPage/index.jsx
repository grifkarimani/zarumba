import React, { Component } from "react";
import { connect } from "react-redux";
import { onSetValue } from "./Actions/actions.js";
import { Link } from "react-router-dom";

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
        const { serverMess = "vfbnpg;fos fskgjbkfjs bsfgkjb sfjgbfjs'pbj sf'[gpbj sfg", passRecoveryUserData } = this.props;
        return (
            <div className="css-pass-recovery">
                {serverMess && <div className="server-mess">{serverMess}</div>}
                <form className="css-passRecovery-form" action="">
                    <input
                        className="css-text-input"
                        type="text"
                        placeholder="*E-mail при регистрации..."
                        onChange={this.handleChange.bind(this, "email")}
                        value={passRecoveryUserData.email}
                    />
                    {/* <input
                        className="css-text-input"
                        type="password"
                        placeholder="Пароль..."
                        onChange={this.handleChange.bind(this, "pass")}
                        value={passRecoveryUserData.pass}
                    /> */}
                    <button className="css-button" onClick={this.onSubmit}>
                        Восстановить
                    </button>
                    <button className="css-button">
                        <Link className="css-link" to="/registration" onClick={this.handleClick}>
                            Регистрация
                        </Link>
                    </button>
                    <button className="css-button">
                        <Link className="css-link" to="/dashboard" onClick={this.handleClick}>
                            Гостевой режим
                        </Link>
                    </button>
                </form>
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
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PassRecoveryPage);
