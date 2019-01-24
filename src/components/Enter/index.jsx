import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextInput from "../Input";
export default class Enter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {}
  render() {
    return (
      <div className="enter">
        <div className="css-form-switch">
          <div className="switch-option">Вход</div>
          <div className="switch-option disabled">Регистрация</div>
        </div>
        <div className="css-forms-container">
          <div className="css-form login-form">
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
          <div className="css-form registration-form disabled">
            <div className="css-form-overlay" />
            <div className="input-group">
              <TextInput
                type="text"
                placeholder="*Имя..."
                onChange={this.handleChange}
                value=""
                icon="fa-user"
                required={true}
                validation={{ isValid: true, message: "" }}
              />
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
              <TextInput
                type="password"
                placeholder="*Пароль еще раз..."
                onChange={this.handleChange}
                value=""
                icon="fa-key"
                required={true}
                validation={{ isValid: true, message: "" }}
              />
            </div>
            <div className="contol-group">
              <button className="css-basis-button" onClick={this.onSubmit}>
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
