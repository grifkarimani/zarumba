import React from "react";
import { connect } from "react-redux";
import { addNewPlayer, removePlayer, setPlayerName } from "../Actions/actions";
import Player from "./Player";
class Players extends React.Component {
  constructor(props) {
    super(props);
    this.setName = this.setName.bind(this);
  }
  setName(id, name) {
    this.props.setName(id, name);
  }
  deletePlayer(id) {
    this.props.deletePlayer(id);
  }
  addPlayer() {
    this.props.addPlayer();
  }
  render() {
    const {
      players,
      validationMessages,

      addPlayer,
      deletePlayer,
      setName,
      clearValidation
    } = this.props;
    const playersArray = [];
    for (let key in players) {
      console.log(key);
      playersArray.push({ id: key, ...players[key] });
    }
    const addButtonisActive = playersArray.length < 7;
    return (
      <div className="css-players">
        <div className="css-add-player">
          <button
            className={`css-basis-button ${addButtonisActive ? "" : "disabled"}`}
            onClick={this.addPlayer.bind(this)}
            disabled={!addButtonisActive}
          >
            <i className="fas fa-user-plus" />
            <span className="add-user-text">Добавить</span>
          </button>
        </div>
        {playersArray.map((player, i) => {
          return <Player {...player} key={i} deletePlayer={this.deletePlayer.bind(this)} setName={this.setName} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.OptionsReducer.players
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPlayer() {
      dispatch(addNewPlayer());
    },
    deletePlayer(id) {
      dispatch(removePlayer(id));
    },
    setName(id, name) {
      console.log("csdcsdcsdc");
      dispatch(setPlayerName(id, name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Players);
