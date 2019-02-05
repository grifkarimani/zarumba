import React from "react";
import { connect } from "react-redux";
import Overlay from "../../Overlay";
// import img from "../../../media/bull.svg";

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
        this.clg = this.clg.bind(this);
    }
    clg() {
        console.log("CLG");
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
        const { handleWhiteBall } = this.props;
        Promise.resolve(handleWhiteBall(this.getOptionsFor("white"))).then(() => {
            if (this.props.whiteBalls <= 0) {
                this.setState({ isOverlayLast: true });
            }
        });
    }
    handleLastBall() {
        const { handleLastBall } = this.props;
        handleLastBall(this.getOptionsFor("last"));
    }
    handleItWasLast() {
        this.setState({ isOverlayRed: true });
    }
    lastWhite(isYellowDroped) {
        const { handleYellowBall, moneyBall, reverse, isReverce, saveAvers, gameOverMessage, saveReverce } = this.props;
        let onlyYellow = !moneyBall.isSelected;
        let withReverce = reverse.isSelected;
        if (isYellowDroped) handleYellowBall(this.getOptionsFor("yellow"));
        if (onlyYellow) {
            this.setState({ isOverlayLast: false });

            if (withReverce) {
                debugger;
                if (isReverce) {
                    this.setState({ gameOver: true });
                    gameOverMessage();
                    saveReverce();
                } else {
                    this.setState({ reverceOverlay: true });
                    saveAvers();
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
            id,
            name,
            current,
            customBallPrice,
            lastBall,
            moneyBall,
            payment,
            random,
            reverse,
            isReverce,
            whites,
            yellows,
            reds,
            nominalBallPrice,
            handleYellowBall,
            handleRedBall,
            handleBull,
            setPage,
            whiteBalls
        } = this.props;
        console.log("Player PROPS", this.props);
        let withMoneyBall = moneyBall.isSelected;
        let isWhitesAre = whiteBalls > 0;
        let withReverce = reverse.isSelected;
        if (!name) {
            return null;
        }
        console.log("RED", this.getOptionsFor("red"));
        return (
            <div className={["css-player", this.getClass()].join(" ")} id={id}>
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
                {this.state.gameOver ? (
                    <Overlay
                        message="Конец игры."
                        confirmButtonLabel="Показать Статистику"
                        confirmButtonHendler={this.clg}
                        page="Results"
                        overlayKey="gameOver"
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
                <div className="css-player-bar">
                    <div className="css-name">{`${name}:`}</div>
                    <div className={["css-current"].join(" ")}>{current}</div>
                    <div className="css-white">
                        <button
                            className={["css-button", isWhitesAre ? "" : "dis"].join(" ")}
                            onClick={this.handleWhiteBall.bind(this)}
                            disabled={!isWhitesAre}
                        />
                    </div>

                    <div className="css-add">
                        <button
                            className={["css-button", isWhitesAre ? "" : "dis"].join(" ")}
                            onClick={handleYellowBall.bind(this, this.getOptionsFor("yellow"))}
                            disabled={!isWhitesAre}
                        />
                    </div>

                    {withMoneyBall ? (
                        <div className="css-double">
                            <button className="css-button" onClick={handleRedBall.bind(this, this.getOptionsFor("red"))} />
                        </div>
                    ) : null}
                    <div className="css-bull-button">
                        <button
                            className={["css-button", isWhitesAre ? "" : withMoneyBall ? "" : "dis"].join(" ")}
                            onClick={handleBull.bind(this, this.getOptionsFor("bull"))}
                            disabled={withMoneyBall ? false : !isWhitesAre}
                        >
                            {/* <img className="css-bull-icon" src={img} alt="" /> */}
                        </button>
                    </div>
                    {!withMoneyBall && !isWhitesAre && (
                        <div className="css-last">
                            <button className="css-button" onClick={this.handleItWasLast.bind(this)}>
                                Закончил
                            </button>
                        </div>
                    )}
                </div>
                {nominalBallPrice ? <div className="css-price">{current * customBallPrice.optionValue}</div> : null}
            </div>
        );
    }
}
const mapStateToProps = state => {
    const { OptionsReducer, GameReducer } = state;
    console.log("OptionsReducer", OptionsReducer);
    console.log("GameReducer", GameReducer);
    return {
        customBallPrice: OptionsReducer.options.customBallPrice,
        lastBall: OptionsReducer.options.lastBall,
        moneyBall: OptionsReducer.options.moneyBall,
        payment: OptionsReducer.options.payment,
        random: OptionsReducer.options.random,
        reverse: OptionsReducer.options.reverse,
        isReverce: GameReducer.isReverce,
        whites: GameReducer.whites,
        yellows: GameReducer.yellows,
        reds: GameReducer.reds,
        whiteBalls: GameReducer.whiteBalls
    };
};
export default connect(mapStateToProps)(Player);
