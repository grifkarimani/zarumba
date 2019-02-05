import React from "react";
import { connect } from "react-redux";
import Player from "./Player/index.jsx";
import GameStatistic from "./GameStatistic/index";
import PlayersStatistic from "./PlayersStatistic/index";
import Conditions from "../Conditions";
import { setPlayerList } from "./Actions/actions";

import img from "../../media/bull.svg";

import { setBall, setBull, setWhite, setYellow, setRed, setLast, stratReverce, setAvers, setReverce, setGameOverMessage } from "./Actions/actions";

class Game extends React.Component {
    componentDidMount() {
        let playersArray = [];
        let players = this.props.OptionsReducer.players;
        for (let key in players) {
            let player = players[key];
            playersArray.push({
                id: key,
                ...player,
                name: player.name,
                position: Math.floor(Math.random() * 10001),
                current: 0,
                bull: 0,
                totalWhites: 0,
                totalReds: 0,
                totalYellows: 0,
                tottalBulls: 0
            });
        }
        if (this.props.isRandom) {
            players.sort((a, b) => a.position - b.position);
        }
        this.props.setPlayers(playersArray);
    }
    playersWithBulls(players) {
        let damages = [];
        players.forEach(player => {
            if (player.bull) {
                for (let i = 0; i < player.bull; i++) {
                    damages.push(player);
                }
            }
        });
        return damages;
    }
    render() {
        if (!this.props.GameReducer.players) return null;
        const {
            OptionsReducer,
            GameReducer,

            handleBall,
            handleBull,
            handleWhiteBall,
            handleYellowBall,
            handleRedBall,
            handleLastBall,
            setPage,
            setReverce,
            saveAvers,
            saveReverce,
            gameOverMessage
        } = this.props;

        const { onlyYellow } = this.props.OptionsReducer;
        const { isReverce, players = [], results, totalBalls, totalBulls, whites, reds, yellows } = this.props.GameReducer;
        const bulls = this.playersWithBulls(GameReducer.players);
        let whitesArr = new Array(15 - (GameReducer.whites > 15 ? 15 : GameReducer.whites)).fill(0);
        return (
            <div className="css-game">
                <div className="feftPart">
                    <div className="css-body" style={{ border: "1px solid grey" }}>
                        <div className="css-center-block">
                            <div className="css-main">
                                <div className="css-players-grid">
                                    {GameReducer.players.map(player => {
                                        return (
                                            <Player
                                                key={player.id}
                                                {...player}
                                                handleBall={handleBall}
                                                isWhitesAre={whitesArr.length > 0}
                                                whitesArr={whitesArr}
                                                handleBull={handleBull}
                                                handleWhiteBall={handleWhiteBall}
                                                handleYellowBall={handleYellowBall}
                                                handleRedBall={handleRedBall}
                                                handleLastBall={handleLastBall}
                                                setReverce={setReverce}
                                                saveAvers={saveAvers}
                                                saveReverce={saveReverce}
                                                setPage={setPage}
                                                gameOverMessage={gameOverMessage}
                                            />
                                        );
                                    })}
                                </div>
                                <div className="css-main-block-footer">
                                    <div className="css-bull">
                                        {bulls.map((bull, index) => (
                                            <div key={index} className="css-bull-item">
                                                <div className="css-bull-item-name">{bull.name}</div>
                                                <img className="css-bull-image" src={img} alt="" />
                                            </div>
                                        ))}
                                    </div>
                                    <button className="css-button">Откатить ход</button>
                                </div>
                            </div>
                        </div>
                        <div className="css-right-bar">
                            <div className="css-statistic">
                                {/* <GameStatistic /> */}
                                <div className="css-game-statistic" />
                                {isReverce ? (
                                    <React.Fragment>
                                        <PlayersStatistic
                                            onlyYellow={onlyYellow}
                                            players={results.avers.players}
                                            totalBalls={results.avers.totalBalls}
                                            totalBulls={results.avers.totalBulls}
                                            whites={results.avers.whites}
                                            reds={results.avers.reds}
                                            yellows={results.avers.yellows}
                                            title="Аверс"
                                        />
                                        <PlayersStatistic
                                            onlyYellow={onlyYellow}
                                            players={players}
                                            totalBalls={totalBalls}
                                            totalBulls={totalBulls}
                                            whites={whites}
                                            reds={reds}
                                            yellows={yellows}
                                            title="Реверс"
                                        />
                                    </React.Fragment>
                                ) : (
                                    <PlayersStatistic
                                        onlyYellow={onlyYellow}
                                        players={players}
                                        totalBalls={totalBalls}
                                        totalBulls={totalBulls}
                                        whites={whites}
                                        reds={reds}
                                        yellows={yellows}
                                        title="Аверс"
                                    />
                                )}
                            </div>
                            <div className="css-log">
                                <div className="css-logs-container">
                                    {GameReducer.log.map((it, index) => {
                                        return it.ball == "bull" ? (
                                            <div key={index} className="css-log-item">
                                                <div className="css-log-time red">{it.time}</div>
                                                <span>Игрок</span>
                                                <div className="css-log-name">{it.name}</div>
                                                <span>получил штраф</span>
                                            </div>
                                        ) : (
                                            <div key={index} className="css-log-item">
                                                <div className="css-log-time">{it.time}</div>
                                                <span>Игрок</span>
                                                <div className="css-log-name">{it.name}</div>
                                                <div className={["css-log-ball"].join(" ")}>{it.message}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="css-footer" style={{ border: "1px solid grey" }} />
                </div>

                <div className="css-rightSide" style={{ border: "1px solid grey" }} />
            </div>
        );
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {
    return {
        handleBall(playerId, points, itWasRed, playerName, itWasLast, lastBallPoints, itWasWhite) {
            dispatch(setBall(playerId, points, itWasRed, playerName, itWasLast, lastBallPoints, itWasWhite));
        },
        handleBull(config) {
            dispatch(setBull(config));
        },
        handleWhiteBall(config) {
            dispatch(setWhite(config));
        },
        handleYellowBall(config) {
            dispatch(setYellow(config));
        },
        handleRedBall(config) {
            dispatch(setRed(config));
        },
        handleLastBall(config) {
            dispatch(setLast(config));
        },
        setReverce() {
            dispatch(stratReverce());
        },
        saveAvers() {
            dispatch(setAvers());
        },
        saveReverce() {
            dispatch(setReverce());
        },
        gameOverMessage() {
            dispatch(setGameOverMessage());
        },
        setPlayers(list) {
            dispatch(setPlayerList(list));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
