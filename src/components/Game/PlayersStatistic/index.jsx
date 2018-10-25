import React from "react";
import img from "../../../media/bull.svg";
import { connect } from "react-redux";

class PlayersStatistic extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            players,
            onlyYellow,
            title,
            totalBalls,
            totalBulls,
            whites,
            reds,
            yellows
        } = this.props;
        return (
            <div className="css-players-statistic">
                <div className="css-stat-player header">
                    <div className="css-player-stat-name">{title}</div>
                    <div className="css-player-stat-options">
                        <div className="css-player-total current">
                            <div className="css-player-total-value">X</div>
                        </div>
                        <div className="css-player-total whites">
                            <div className="css-player-total-value">
                                {whites}
                            </div>
                        </div>
                        <div className="css-player-total yellows">
                            <div className="css-player-total-value">
                                {yellows}
                            </div>
                        </div>
                        {!onlyYellow && (
                            <div className="css-player-total reds">
                                <div className="css-player-total-value">
                                    {reds}
                                </div>
                            </div>
                        )}
                        <div className="css-player-total bulls">
                            <img
                                className="css-player-stat-bull"
                                src={img}
                                alt=""
                            />
                            <div className="css-player-total-value">
                                {totalBulls}
                            </div>
                        </div>
                        <div className="css-player-total all">
                            <div className="css-player-total-value">
                                {yellows + reds + whites}
                            </div>
                        </div>
                    </div>
                </div>
                {players.map(player => (
                    <div className="css-stat-player" key={player.id}>
                        <div className="css-player-stat-name">
                            {`${player.name}:`}
                        </div>
                        <div className="css-player-stat-options">
                            <div className="css-player-total current">
                                <div className="css-player-total-value">
                                    {player.current}
                                </div>
                            </div>
                            <div className="css-player-total whites">
                                <div className="css-player-total-value">
                                    {player.totalWhites}
                                </div>
                            </div>
                            <div className="css-player-total yellows">
                                <div className="css-player-total-value">
                                    {player.totalYellows}
                                </div>
                            </div>
                            {!onlyYellow && (
                                <div className="css-player-total reds">
                                    <div className="css-player-total-value">
                                        {player.totalReds}
                                    </div>
                                </div>
                            )}
                            <div className="css-player-total bulls">
                                <img
                                    className="css-player-stat-bull"
                                    src={img}
                                    alt=""
                                />
                                <div className="css-player-total-value">
                                    {player.tottalBulls}
                                </div>
                            </div>
                            <div className="css-player-total all">
                                <div className="css-player-total-value">
                                    {player.totalYellows +
                                        player.totalReds +
                                        player.totalWhites}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         players: state.game.players,
//         onlyYellow: state.options.onlyYellow
//     }
// }

export default PlayersStatistic;
