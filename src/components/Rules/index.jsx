import React from "react";
import { Collapse } from "antd";
import "antd/dist/antd.css";
const Panel = Collapse.Panel;
class Rules extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.history.push("/options");
  }
  render() {
    return (
      <div className="css-rules">
        <div className="css-content">
          <Collapse accordion={true} defaultActiveKey={["1"]} bordered={false}>
            <Panel header="Общее описание приложения" key="1">
              <div className="panel-content">
                Сущетвует 2 возможных режима игры: Пользовательский и Инкогнито.
                Пользовательский: - игра полностью записывается и пользователь
                может всегда просмотреть ее результаты и лог игры. Каждый ход
                записывается. - и так далее.. Инкогнито: - игра не записывается
                и не сохраняется. - в случае каких-либо проблем в устройством,
                браузером или соединением - текущее состояние не сохраняется. -
                нет никаких гарантий в логике обработки ходов. В разработке.
                Однако, могу сказать сразу, что в основном правила оговариваются
                игроками перед началом встречи. Далее будет описана скорее
                логика приложения и некие общие ограниечения...
              </div>
            </Panel>
            <Panel header="Условныые обозначения" key="2">
              <p className="panel-content">
                Разного рода условные обозначения, кнопочки и так далее...
              </p>
            </Panel>
            <Panel header="Меню 'Начальные настройки'" key="3">
              <p className="panel-content">
                Вводятся имена, определяется порядок жеребъевки, наличие
                дополнительного шара, стоимость креста и так далее...
              </p>
            </Panel>
            <Panel header="Игровой процесс" key="4">
              <p className="panel-content">
                Порядок добавления очков, назначение штрафов и так дале...
              </p>
            </Panel>
            <Panel header="Игровая статистика" key="5">
              <p className="panel-content">
                Выводится полная игровая статистика
              </p>
            </Panel>
          </Collapse>
        </div>
        <div className="css-rules-controls">
          <button className="css-basis-button" onClick={this.handleClick}>
            Далее
          </button>
        </div>
      </div>
    );
  }
}

export default Rules;
