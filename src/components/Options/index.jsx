import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Players from "./Players/index";
import StartOptions from "./StartOptions/index";
import { Scrollbars } from "react-custom-scrollbars";
import { onSetValidationMessage } from "./Actions/actions";
import { Modal, Button } from "antd";

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  validateNames() {
    const { players } = this.props;
    let invalidKeys = [];
    for (let key in players) {
      if (players[key].name.length < 4) {
        invalidKeys.push(key);
        this.props.setValidationMessage(key, "Не менее 4 символов");
      }
    }
    return invalidKeys.length === 0;
  }
  handleStart() {
    let validation = this.validateNames();
    console.log("validation", validation);
    if (!validation) return;
    this.showModal();

    // if (!this.validateNames().length) {
    //   this.props.history.push("/game");
    // }
  }
  renderCheckList() {
    const { players, options } = this.props;
    let playersArray = [];
    for (let key in players) {
      playersArray.push({ id: key, ...players[key] });
    }
    let optionsArray = [];
    for (let key in options) {
      optionsArray.push({ id: key, ...options[key] });
    }
    console.log("optionsArray", optionsArray);

    return (
      <div className="css-checklist">
        <div className="players">
          <div className="title">Имя:</div>
          <div className="playersList">
            {playersArray.map((player, index) => {
              return (
                <div key={index} className="ckeckPlayer">
                  {player.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="options">
          {optionsArray.map((option, index) => {
            let currentState = option.currentState;
            return (
              <div className="checkList-option">
                <div className="header-icon-container">
                  <i className={`css-icon ${option[currentState].icon}`} />
                </div>
                <div className="css-header-text-container">
                  <div className="text">{option[currentState].header}</div>

                  {currentState === "active" && option.setContainer && (
                    <div className="option-value">{option.setContainer.defaultValue}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  render() {
    const { clearValidation } = this.props;
    return (
      <div className="css-options-page">
        <Modal
          title="Стартовые опции"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          centered={true}
          closable={false}
          maskClosable={false}
          width={"auto"}
          className="css-checkList"
          footer={[
            <Button className="cancell" key="back" onClick={this.handleCancel}>
              Назад
            </Button>,
            <Button className="confirm" key="submit" type="primary" onClick={this.handleOk}>
              Старт
            </Button>
          ]}
        >
          {this.renderCheckList()}
        </Modal>
        <div className="css-form">
          <div className="input-group">
            <div className="left-pannel">
              <Players clearValidation={clearValidation} />
            </div>
            <div className="right-pannel">
              <Scrollbars autoHide autoHideTimeout={500}>
                <StartOptions />
              </Scrollbars>
            </div>
          </div>

          <div className="contol-group">
            <button className="css-basis-button" onClick={this.handleStart.bind(this)}>
              Старт
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.OptionsReducer.players,
    options: state.OptionsReducer.options
  };
};
const mapDispatchToProps = dispatch => ({
  setValidationMessage(key, message) {
    dispatch(onSetValidationMessage(key, message));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Options));
