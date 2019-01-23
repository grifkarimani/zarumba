import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { modeAccept } from "../App/Actions/actions";

class DashBoard extends Component {
    handleClick(path, isAccept) {
        if (isAccept) {
            this.props.history.push(path)
        }
    }
    render() {
        const { guestModeAccept, onGuestModeAcceptChange } = this.props;
        return (
            <div className="css-dashboard">
                <div className="dashboard-panel left">
                    <div className="css-thumbNail">
                        <div className="css-info">
                            <div className="header">Гостевой режим</div>
                            <div className="content">
                                Гостевой режим не предполагает какого либо сохранения игры (ходов, статистики и так далее). Данные не будут сохранены в случае
                                случайной перезагрузки страницы. Результат игры не попадет в историю. Разработчик вообще не несет никакой отвественности за данные в
                            рамках гостевого режима.
                            </div>
                        </div>
                        <div className="css-controls">
                            <div className="additional-block">
                                <label htmlFor="001" className="css-accept">
                                    <input type="checkbox" name="" id="001" checked={guestModeAccept} onChange={onGuestModeAcceptChange} />Я прочитал и согласен на
                                    гостевой режим
                            </label>
                            </div>
                            <div className="buttons">
                                <button className={["css-button", guestModeAccept ? "" : "disabled"].join(" ")} onClick={this.handleClick.bind(this, "/rules", this.props.guestModeAccept)}>
                                    Гостевой режим
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="dashboard-panel right">
                    <div className="css-thumbNail">
                        <div className="css-info">
                            <div className="header">Пользовательский режим</div>
                            <div className="content">
                                Ведется полная статистика, все ходы сохраняются, полностью сохраняется сессия и результаты встречи. После окончания происходит
                                отправка результатов на электронную почту.
                            </div>
                        </div>
                        <div className="css-controls">
                            <div className="additional-block"></div>
                            <div className="buttons">
                                <button className="css-button" onClick={this.handleClick.bind(this, "/login", true)}>
                                    Войти
                                </button>
                                <button className="css-button" onClick={this.handleClick.bind(this, "/registration", true)}>
                                    Регистрация
                                </button>
                            </div>
                        </div>
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
