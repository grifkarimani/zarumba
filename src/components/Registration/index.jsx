import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

export default class Registration extends Component {
    render() {
        const { serverMess = "" } = this.props;
        return (
            <div className="css-registration">
                <form className="css-registration-form" action="">
                    <input className="css-text-input" type="text" placeholder="*Имя..." />
                    <input className="css-text-input" type="email" placeholder="*мояпочта@почта.бай..." />
                    <input className="css-text-input" type="password" placeholder="*Пароль..." />
                    <input className="css-text-input" type="password" placeholder="*Еще раз пароль..." />
                    <button className="css-button" type="submit">
                        Регистрация
                    </button>
                </form>
                {serverMess && <div className="server-mess">{serverMess}</div>}
                <div>
                    <p className="message">У меня есть учетная запись</p>
                    <button className="css-button">
                        {" "}
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
