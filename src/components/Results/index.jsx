import React from 'react';
import { connect } from 'react-redux';
import Conditions from '../Conditions'

class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            withReverce, payLoosers, isRandom, onlyYellow,
            redPoints, yellowPoints, lastBall, lastBallByCost,
            nominalBallPrice, whiteBalls, ballPrice, markerName, startOptions } = this.props.options;
        const { avers, reverce } = this.props.results;
        let sharePlayers;
        if (reverce.players && reverce.players != 0) {
            let revercePlayers = reverce.players.reverse();
            sharePlayers = avers.players.map((player, index) => {
                return {
                    name: player.name,
                    current: player.current + revercePlayers[index].current,
                    totalWhites: player.totalWhites + revercePlayers[index].totalWhites,
                    totalReds: player.totalReds + revercePlayers[index].totalReds,
                    totalYellows: player.totalYellows + revercePlayers[index].totalYellows,
                    tottalBulls: player.tottalBulls + revercePlayers[index].tottalBulls
                }
            })
        }


        return (
            <div className="css-results">
                <div className="css-results-wrapper">
                    <div className="css-left startoptions">
                    <Conditions />
                    </div>
                    <div className="css-center">
                        {(reverce.players && reverce.players != 0)
                            ? <div className="center-left-left">
                                <div className="header">Итог</div>
                                <div className="body">
                                    {sharePlayers.map((player, index) =>
                                        <div key={index} className="player">
                                            <div className="player-name">{`${player.name}: `}</div>
                                            <div className={["player-current", player.current < 0 ? 'red' : 'blue'].join(' ')}>{`Итог по очкам: ${player.current}`}</div>
                                            {nominalBallPrice && (<div className={["player-mon", player.current < 0 ? 'red' : 'blue'].join(' ')}>{`Реальный итог: ${player.current * ballPrice}`}</div>)}
                                            <div className="player-totalWhites">{`Белых: ${player.totalWhites}`}</div>
                                            <div className="player-totalYellows">{`Свояков от белого: ${player.totalYellows}`}</div>
                                            <div className="player-totalReds">{`Красных/от красного: ${player.totalReds}`}</div>
                                            <div className="player-tottalBulls">{`Получил штрафов: ${player.tottalBulls}`}</div>
                                        </div>
                                    )}
                                </div>
                            </div> : null}

                        <div className="css-center-left">
                            <div className="header">Аверс</div>
                            <div className="body">
                                {avers.players.map((player, index) =>
                                    <div key={index} className="player">
                                        <div className="player-name">{`${player.name}: `}</div>
                                        <div className={["player-current", player.current < 0 ? 'red' : 'blue'].join(' ')}>{`Итог по очкам: ${player.current}`}</div>
                                        {nominalBallPrice && (<div className={["player-mon", player.current < 0 ? 'red' : 'blue'].join(' ')}>{`Реальный итог: ${player.current * ballPrice}`}</div>)}
                                        <div className="player-totalWhites">{`Белых: ${player.totalWhites}`}</div>
                                        <div className="player-totalYellows">{`Свояков от белого: ${player.totalYellows}`}</div>
                                        <div className="player-totalReds">{`Красных/от красного: ${player.totalReds}`}</div>
                                        <div className="player-tottalBulls">{`Получил штрафов: ${player.tottalBulls}`}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {(reverce.players && reverce.players != 0)
                            ? <div className="css-center-right">
                                <div className="header">Реверс</div>
                                <div className="body">
                                    {reverce.players.map((player, index) =>
                                        <div key={index} className="player">
                                            <div className="player-name">{`${player.name}: `}</div>
                                            <div className={["player-current", player.current < 0 ? 'red' : 'blue'].join(' ')}>{`Итог по очкам: ${player.current}`}</div>
                                            {nominalBallPrice && (<div className={["player-mon", player.current < 0 ? 'red' : 'blue'].join(' ')}>{`Реальный итог: ${player.current * ballPrice}`}</div>)}
                                            <div className="player-totalWhites">{`Белых: ${player.totalWhites}`}</div>
                                            <div className="player-totalYellows">{`Свояков от белого: ${player.totalYellows}`}</div>
                                            <div className="player-totalReds">{`Красных/от красного: ${player.totalReds}`}</div>
                                            <div className="player-tottalBulls">{`Получил штрафов: ${player.tottalBulls}`}</div>
                                        </div>
                                    )}
                                </div>

                                <div className="body"></div>
                            </div> : null}
                    </div>
                    <div className="css-right">
                        {this.props.log.map((it, i) =>
                            <div key={i} className={["log-item", it.message == 'забил белый' ? "white" : it.message == 'забил желтый' ? "yellow" : it.message == 'забил красный' ? "red" : it.message == 'получил штраф' ? 'bull' : (it.message == 'Реверс начался' || it.message == 'Аверс начался' || it.message == 'Игра окончена') ? 'info' : ''].join(' ')}>
                                <div className="time">{it.time}</div>
                                <div className="name">{it.name}</div>
                                <div className="message">{it.message}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        options: state.options,
        results: state.game.results,
        log: state.game.log
    }
}

export default connect(mapStateToProps, null)(Results);