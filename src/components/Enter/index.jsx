import React, { Component } from "react";
// import { Link } from "react-router-dom";
import LoginForm from "../LoginForm";
import Registration from "../Registration";
export default class Enter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeForm: "login"
        };
    }
    setForm(formKey) {
        this.setState({
            activeForm: formKey
        });
    }
    handleChange() {}
    render() {
        const { activeForm } = this.state;
        return (
            <div className="enter">
                <div className="css-form-switch">
                    <div className={`switch-option ${activeForm === "login" ? "" : "disabled"}`} onClick={this.setForm.bind(this, "login")}>
                        Вход
                    </div>
                    <div className={`switch-option ${activeForm === "registration" ? "" : "disabled"}`} onClick={this.setForm.bind(this, "registration")}>
                        Регистрация
                    </div>
                </div>
                <div className="css-forms-container">
                    <LoginForm isActive={activeForm === "login"} setForm={this.setForm.bind(this)} />
                    <Registration isActive={activeForm === "registration"} setForm={this.setForm.bind(this)} />
                </div>
            </div>
        );
    }
}
