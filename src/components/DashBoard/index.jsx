import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import { modeAccept } from "../App/Actions/actions";
import ThumbNail from "./ThumbNail";

const thumbs = {
  incognito: {
    icon: "fa-user-secret",
    header: "Инкогнито",
    text:
      "Не предполагает какого либо сохранения игры (ходов, статистики и так далее). Данные не будут сохранены в случае случайной перезагрузки страницы. Результат игры не попадет в историю. Разработчик вообще не несет никакой отвественности за данные в рамках гостевого режима.",
    path: "/rules"
  },
  user: {
    icon: "fa-user-shield",
    header: "Пользователь",
    text:
      "Ведется полная статистика, все ходы сохраняются, полностью сохраняется сессия и результаты встречи. После окончания происходит отправка результатов на электронную почту.",
    path: "/enter"
  }
};
class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="css-dashboard">
        <div className="dashboard-panel left">
          <ThumbNail
            icon={thumbs.incognito.icon}
            header={thumbs.incognito.header}
            text={thumbs.incognito.text}
            handler={this.handleClick}
            path={thumbs.incognito.path}
          />
        </div>
        <div className="dashboard-panel right">
          <ThumbNail
            icon={thumbs.user.icon}
            header={thumbs.user.header}
            text={thumbs.user.text}
            handler={this.handleClick}
            path={thumbs.user.path}
          />
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
