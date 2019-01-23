import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { modeAccept } from "../App/Actions/actions";

class DashBoard extends Component {
    handleClick(path, isAccept) {
        if (isAccept) {
            this.props.history.push(path);
        }
    }
    render() {
        const { guestModeAccept, onGuestModeAcceptChange } = this.props;
        return (
            <div className="css-dashboard">
                <div className="dashboard-panel left">
                    <div className="css-thumbNail">
                        <span className="custom-icon">
                            <i class="fas fa-user-secret" />
                        </span>

                        <div className="content">
                            <div className="header">Инкогнито</div>

                            <div className="text">
                                Не предполагает какого либо сохранения игры (ходов, статистики и так далее). Данные не будут сохранены в случае случайной
                                перезагрузки страницы. Результат игры не попадет в историю. Разработчик вообще не несет никакой отвественности за данные в
                                рамках гостевого режима.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-panel right">
                    <div className="css-thumbNail">
                        <span className="custom-icon">
                            <i class="fas fa-user-shield" />
                        </span>
                        <div className="content">
                            <div className="header">Полная версия</div>
                            <div className="text">
                                Ведется полная статистика, все ходы сохраняются, полностью сохраняется сессия и результаты встречи. После окончания происходит
                                отправка результатов на электронную почту.
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
