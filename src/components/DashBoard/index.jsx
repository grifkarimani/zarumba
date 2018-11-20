import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { modeAccept } from "../App/Actions/actions";

class DashBoard extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        if (!this.props.guestModeAccept) e.preventDefault();
    }
    render() {
        const { guestModeAccept, onGuestModeAcceptChange } = this.props;
        return (
            <div className="css-dashboard">
                <div className="dashboard-panel left">
                    <div className="css-info">
                        <h1 className="header">Гостевой режим</h1>
                        <p className="content">
                            Гостевой режим не предполагает какого либо сохранения игры (ходов, статистики и так далее). данные не будут сохранены в случае
                            случайной перезагрузки страницы. Результат игры не попадет в историю. Разработчик вообще не несет никакой отвественности за данные в
                            рамках гостевого режима.{" "}
                        </p>
                    </div>
                    <div className="css-controls">
                        <label htmlFor="001">
                            <input type="checkbox" name="" id="001" checked={guestModeAccept} onChange={onGuestModeAcceptChange} />Я прочитал и согласен на
                            гостевой режим
                        </label>
                        <button className={["css-button", guestModeAccept ? "" : "disabled"].join(" ")}>
                            <Link className="css-link" to="/rules" onClick={this.handleClick}>
                                Гостевой режим
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="dashboard-panel right">
                    <div className="css-info">
                        <h1 className="header">Пользовательский режим</h1>
                        <p className="content">
                            Ведется полная статистика, все ходы сохраняются, полностью сохраняется сессия и результаты встречи. После окончания происходит
                            отправка результатов на электронную почту.
                        </p>
                    </div>
                    <div className="css-controls">
                        <button className="css-button">
                            <Link to="/login" className="css-link">
                                Войти
                            </Link>
                        </button>
                        <button className="css-button">
                            <Link to="/registration" className="css-link">
                                Регистрация
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        loggedIn: state.AppReducer.loggedIn,
        guestModeAccept: state.AppReducer.guestModeAccept
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGuestModeAcceptChange() {
            dispatch(modeAccept());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashBoard);
