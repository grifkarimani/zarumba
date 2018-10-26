import React from "react";
import { connect } from "react-redux";
import Overlay from "../../Overlay";
import img from "../../../media/bull.svg";

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOverlayRed: false,
            isOverlayLast: false,
            reverceOverlay: false,
            gameOver: false
        };
        this.lastWhite = this.lastWhite.bind(this);
        this.lastRed = this.lastRed.bind(this);
        this.stratReverce = this.stratReverce.bind(this);
    }
    getClass() {
        const { current } = this.props;
        return current > 0 ? "blue" : current == 0 ? "grey" : "red";
    }
    getOptionsFor(param) {
        const { redPoints, id, lastBall } = this.props;
        switch (param) {
            case "white":
            case "yellow":
            case "bull":
                return {
                    playerId: id
                };
            case "red":
                return {
                    playerId: id,
                    redPoints: redPoints
                };
            case "last":
                return {
                    playerId: id,
                    lastBall: lastBall
                };
            default:
                return {
                    playerId: id
                };
        }
    }
    handleWhiteBall() {
        const { whites, handleWhiteBall } = this.props;
        if (whites == 14) {
            this.setState({ isOverlayLast: true });
        }
        handleWhiteBall(this.getOptionsFor("white"));
    }
    handleLastBall() {
        const { handleLastBall } = this.props;
        handleLastBall(this.getOptionsFor("last"));
    }
    handleItWasLast() {
        this.setState({ isOverlayRed: true });
    }
    lastWhite(isYellowDroped) {
        const { handleYellowBall, onlyYellow, withReverce, isReverce, saveAvers, gameOverMessage, saveReverce } = this.props;
        if (isYellowDroped) handleYellowBall(this.getOptionsFor("yellow"));
        if (onlyYellow) {
            this.setState({ isOverlayLast: false });
            if (withReverce) {
                if (!isReverce) {
                    this.setState({ reverceOverlay: true });
                    saveAvers();
                } else {
                    this.setState({ gameOver: true });
                    gameOverMessage();
                    saveReverce();
                }
            } else {
                saveAvers();
                gameOverMessage();
                this.setState({ gameOver: true });
            }
        } else {
            this.setState({ isOverlayLast: false });
        }
    }

    lastRed(isYellowDroped) {
        const { handleYellowBall, handleLastBall, withReverce, isReverce, saveAvers, gameOverMessage, saveReverce } = this.props;
        if (isYellowDroped) handleYellowBall(this.getOptionsFor("yellow"));
        handleLastBall(this.getOptionsFor("last"));
        this.setState({ isOverlayRed: false });
        if (withReverce) {
            if (!isReverce) {
                this.setState({ reverceOverlay: true });
                saveAvers();
            } else {
                gameOverMessage();
                this.setState({ gameOver: true });
                saveReverce();
            }
        } else {
            saveAvers();
            gameOverMessage();
            this.setState({ gameOver: true });
        }
    }
    stratReverce(isReverceAccept) {
        const { isReverce, setReverce, gameOverMessage } = this.props;
        if (isReverceAccept) {
            if (!isReverce) setReverce();
            this.setState({ reverceOverlay: false });
        } else {
            gameOverMessage();
            this.setState({ reverceOverlay: false });
            this.setState({ gameOver: true });
        }
    }
    render() {
        const {
            name,
            current,
            ballPrice,
            onlyYellow,
            nominalBallPrice,
            isWhitesAre,
            withReverce,
            handleYellowBall,
            handleRedBall,
            handleBull,
            setPage
        } = this.props;
        return (
            <div className={["css-player", this.getClass()].join(" ")}>
                {this.state.isOverlayLast ? (
                    <Overlay
                        message="Был сыгран последний белый."
                        guestion="Биток упал?"
                        confirmButtonLabel="Да"
                        confirmButtonHendler={this.lastWhite}
                        abortButtonLabel="Нет"
                        abortButtonHendler={this.lastWhite}
                    />
                ) : null}
                {this.state.isOverlayRed ? (
                    <Overlay
                        message="Был забит последний шар (красный)."
                        guestion="Биток упал?"
                        confirmButtonLabel="Да"
                        confirmButtonHendler={this.lastRed}
                        abortButtonLabel="Нет"
                        abortButtonHendler={this.lastRed}
                    />
                ) : null}
                {this.state.reverceOverlay && withReverce ? (
                    <Overlay
                        guestion="Начать реверс?"
                        confirmButtonLabel="Да"
                        confirmButtonHendler={this.stratReverce}
                        abortButtonLabel="Нет"
                        abortButtonHendler={this.stratReverce}
                    />
                ) : null}
                {this.state.gameOver ? (
                    <Overlay message="Конец игры." confirmButtonLabel="Показать Статистику" confirmButtonHendler={setPage} page="Results" />
                ) : null}

                <div className="css-player-bar">
                    <div className="css-name">{`${name}:`}</div>
                    <div className={["css-current"].join(" ")}>{current}</div>
                    <div className="css-white">
                        <button
                            className={["css-button", isWhitesAre ? "" : "dis"].join(" ")}
                            onClick={this.handleWhiteBall.bind(this)}
                            disabled={!isWhitesAre}
                        >
                            +
                        </button>
                    </div>

                    <div className="css-add">
                        <button
                            className={["css-button", isWhitesAre ? "" : "dis"].join(" ")}
                            onClick={handleYellowBall.bind(this, this.getOptionsFor("yellow"))}
                            disabled={!isWhitesAre}
                        >
                            +
                        </button>
                    </div>
                    {!onlyYellow ? (
                        <div className="css-double">
                            <button className="css-button" onClick={handleRedBall.bind(this, this.getOptionsFor("red"))}>
                                +
                            </button>
                        </div>
                    ) : null}
                    <div className="css-bull-button">
                        <button
                            className={["css-button", isWhitesAre ? "" : onlyYellow ? "" : "dis"].join(" ")}
                            onClick={handleBull.bind(this, this.getOptionsFor("bull"))}
                            disabled={onlyYellow ? false : !isWhitesAre}
                        >
                            <img className="css-bull-icon" src={img} alt="" />
                        </button>
                    </div>
                    {!onlyYellow &&
                        !isWhitesAre && (
                            <div className="css-last">
                                <button className="css-button" onClick={this.handleItWasLast.bind(this)}>
                                    Закончил
                                </button>
                            </div>
                        )}
                </div>
                {!nominalBallPrice ? <div className="css-price">{current * ballPrice}</div> : null}
            </div>
        );
    }
}
const mapStateToProps = state => {
    const { OptionsReducer, GameReducer } = state;
    return {
        ballPrice: OptionsReducer.ballPrice,
        isReverce: GameReducer.isReverce,
        lastBall: OptionsReducer.lastBall,
        nominalBallPrice: OptionsReducer.nominalBallPrice,
        onlyYellow: OptionsReducer.onlyYellow,
        withReverce: OptionsReducer.withReverce,
        redPoints: OptionsReducer.redPoints,
        whites: GameReducer.whites,
        lastBallByCost: OptionsReducer.lastBallByCost
    };
};
export default connect(mapStateToProps)(Player);
