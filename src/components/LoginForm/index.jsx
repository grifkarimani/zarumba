import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

export default class LoginForm extends Component {
    render() {
        return (
            <div className="css-login-form">
                <form action="">
                    <input className="css-text-input" type="text" />
                    <input className="css-text-input" type="password" name="" id="" />
                    <button className="css-button" type="submit">
                        Войти
                    </button>
                </form>
                <p>У меня нет учетной записи</p>
                <button className="css-button">
                    <Link className="css-link" to="/registration" onClick={this.handleClick}>
                        Регистрация
                    </Link>
                </button>

                <button className="css-button">
                    <Link className="css-link" to="/rules" onClick={this.handleClick}>
                        Гостевой режим
                    </Link>
                </button>
            </div>
        );
    }
}
