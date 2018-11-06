import React, { Component } from "react";

export default class LoginForm extends Component {
    render() {
        return (
            <div className="css-login-form">
                <form action="">
                    <input type="text" />
                    <input type="text" name="" id="" />
                    <button type="submit">Войти</button>
                </form>
                <button>Зарегистрироваться</button>
            </div>
        );
    }
}
