import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Enter extends Component {
    render() {
        return (
            <div className="enter">
                <button className="css-basis-button">Buttonbfgbfg</button>
                <button className="css-basis-button">Buttonbfgbfg</button>
                <button className="css-basis-button">Buttonbfgbfg</button>
                <button className="css-basis-button">Buttonbfgbfg</button>
                <button className="css-basis-button">Buttonbfgbfg</button>
                <button className="css-basis-button">Buttonbfgbfg</button>
                <div className="css-form">
                    <form className="input-group" action="">
                        <input
                            className="css-text-input"
                            type="text"
                            placeholder="*E-mail..."
                            // onChange={this.handleChange.bind(this, "email")}
                            // value={loginUserData.email}
                        />
                        <input
                            className="css-text-input"
                            type="password"
                            placeholder="*Пароль..."
                            // onChange={this.handleChange.bind(this, "pass")}
                            // value={loginUserData.pass}
                        />
                        <Link className="css-link forgotPass" to="/pass_recovery">
                            Я забыл пароль...
                        </Link>
                        {/* <button className="css-button" onClick={this.onSubmit}>
                            Войти
                        </button> */}
                    </form>
                    <div className="contol-group">
                        <button className="css-button">Регистрация</button>
                        <button className="css-button">Гостевой режим</button>
                    </div>
                </div>
                <div className="css-form">
                    <form className="input-group" action="">
                        <input
                            className="css-text-input"
                            type="text"
                            placeholder="*Имя..."
                            // onChange={this.handleChange.bind(this, "name")}
                            // value={newUserData.name}
                        />
                        <input
                            className="css-text-input"
                            type="email"
                            placeholder="*мояпочта@почта.бай..."
                            // onChange={this.handleChange.bind(this, "email")}
                            // value={newUserData.email}
                        />
                        <input
                            className="css-text-input"
                            type="password"
                            placeholder="*Пароль..."
                            // onChange={this.handleChange.bind(this, "pass")}
                            // value={newUserData.pass}
                        />
                        <input
                            className="css-text-input"
                            type="password"
                            placeholder="*Еще раз пароль..."
                            // onChange={this.handleChange.bind(this, "confirmPass")}
                            // value={newUserData.confirmPass}
                        />
                        {/* <button className="css-button" onClick={this.onSubmit}>
                            Регистрация
                        </button> */}
                    </form>
                    <div className="contol-group">
                        {/* <button className="css-button">
                            <Link className="css-link" to="/login" onClick={this.handleClick}>
                                Войти
                            </Link>
                        </button>

                        <button className="css-button">
                            <Link className="css-link" to="/dashboard" onClick={this.handleClick}>
                                Гостевой режим
                            </Link>
                        </button> */}
                    </div>
                </div>
            </div>
        );
    }
}
