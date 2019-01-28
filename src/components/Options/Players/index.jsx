import React from "react";
import { connect } from "react-redux";

import remove from "../../../media/remove.svg";
import add from "../../../media/add.svg";
import info from "../../../media/info.svg";
import TextInput from "../../Input";
// import Marker from "../StartOptions/Marker";

import { addNewPlayer, removePlayer, setPlayerName } from "../Actions/actions";

class Players extends React.Component {
    render() {
        const {
            players,
            validationMessages,

            addPlayer,
            deletePlayer,
            setName,
            clearValidation
        } = this.props;
        const addButtonVisible = players.length < 7;
        return (
            <div className="css-players">
                <div className="css-add-player">
                    <button className="css-basis-button" onClick={addPlayer} disabled={!addButtonVisible}>
                        <i class="fas fa-user-plus" />
                        <span className="add-user-text">Добавить</span>
                    </button>
                </div>
                {players.map(player => {
                    return (
                        <div className="css-player-name" key={player.id}>
                            <TextInput />
                            {player.canRemove ? (
                                <div className="css-remove-container">
                                    <i class="fas fa-user-times" />
                                </div>
                            ) : null}
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state.OptionsReducer.players,
        validationMessages: state.OptionsReducer.validationMessages
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
        setName(event) {
            dispatch(setPlayerName(event));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Players);
