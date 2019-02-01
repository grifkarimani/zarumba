import React from "react";
import { connect } from "react-redux";
import { addNewPlayer, removePlayer, setPlayerName } from "../Actions/actions";
import Player from "./Player";
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
                {players.map((player, i) => {
                    return <Player {...player} key={i} />;
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
