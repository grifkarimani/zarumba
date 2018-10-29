import React from "react";
import { connect } from "react-redux";
// import { Redirect, Link } from "react-router-dom";
import { getStartupData } from "./selectors";
import { setPlayerList } from "../Game/Actions/actions";
import Conditions from "../Conditions";

class CheckList extends React.Component {
    handleStart(page) {
        let players = this.props.players.map(player => {
            return {
                id: player.id,
                name: player.name,
                position: Math.floor(Math.random() * 10001),
                current: 0,
                bull: 0,
                totalWhites: 0,
                totalReds: 0,
                totalYellows: 0,
                tottalBulls: 0
            };
        });
        if (this.props.isRandom) {
            players.sort((a, b) => a.position - b.position);
        }
        this.props.setPlayers(players);
    }
    render() {
        const { players } = this.props;
        return (
            <div className="css-checkList">
                <div className="css-list">
                    <div className="css-body">
                        <div className="css-players">
                            <div className="css-items">
                                {players.map((payer, index) => (
                                    <div key={index} className="css-item">
                                        {payer.name}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="css-start-options">
                            <div className="css-title">Условия:</div>
                            <Conditions />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = getStartupData;
const mapDispatchToProps = dispatch => {
    return {
        setPlayers(list) {
            dispatch(setPlayerList(list));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckList);
