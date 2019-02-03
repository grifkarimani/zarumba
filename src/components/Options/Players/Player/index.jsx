import React, { Component } from "react";
import TextInput from "../../../Input";

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(id) {
    const { deletePlayer } = this.props;
    deletePlayer(id);
  }
  handleChange(e) {
    const { id } = this.props;
    this.props.setName(id, e.target.value);
  }
  render() {
    const { canRemove, deletePlayer, setName, validation = "", name = "" } = this.props;

    return (
      <div className="css-player-name">
        <div className={`css-text-input-wrapper`}>
          <i className={`css-icon css-inside fas fa-user`} />
          <input
            className={`css-text-input ${validation && "invalid"} `}
            type="text"
            placeholder="Имя..."
            onChange={this.handleChange.bind(this)}
            value={name}
          />
          <div className="input-validation">{validation && <span className="validation-text">{validation}</span>}</div>
        </div>
        {canRemove ? (
          <div className="css-remove-container" onClick={this.handleClick.bind(this, this.props.id)}>
            <i className="fas fa-user-times" />
          </div>
        ) : null}
      </div>
    );
  }
}
