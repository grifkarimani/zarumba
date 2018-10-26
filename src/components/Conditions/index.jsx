import React from "react";
import { connect } from "react-redux";

class Conditions extends React.Component {
    getConditions() {
        const {
            players,
            markerName,
            withReverce,
            payLoosers,
            isRandom,
            onlyYellow,
            redPoints,
            lastBallByCost,
            lastBall,
            nominalBallPrice,
            ballPrice
        } = this.props;
        let conditions = [];
        conditions.push(`Играет ${players.length} человека.`);
        conditions.push(markerName ? `Маркер: ${markerName}.` : `Маркер не указан.`);
        conditions.push(withReverce ? "Игра с реверсом." : "Игра без реверса.");
        conditions.push(payLoosers ? "Свет оплачивают минусовые." : "Свет на всех.");
        conditions.push(isRandom ? "Случайный стартовый порядок игроков." : "Стартовый порядок без жеребьевки.");
        conditions.push(onlyYellow ? "Игра с одним цветным шаром." : "Игра с дополнительным цветным шаром.");
        if (!onlyYellow) {
            conditions.push(`Дополнительный цветной за ${redPoints}.`);
        }
        if (lastBallByCost) {
            conditions.push(`Последний шар за ${onlyYellow ? lastBall : redPoints}.`);
        } else {
            conditions.push(`Последний шар за ${lastBall}.`);
        }
        conditions.push(nominalBallPrice ? "Игра на очки." : `Играем по ${ballPrice} за шар.`);
        return conditions;
    }
    render() {
        const conditions = this.getConditions();
        return (
            <ul className="css-conditions">
                {conditions.map((condition, index) => (
                    <li className="css-condition" key={index}>
                        {condition}
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        withReverce: state.OptionsReducer.withReverce,

        payLoosers: state.OptionsReducer.payLoosers,
        isRandom: state.OptionsReducer.isRandom,
        onlyYellow: state.OptionsReducer.onlyYellow,
        redPoints: state.OptionsReducer.redPoints,
        lastBallByCost: state.OptionsReducer.lastBallByCost,
        lastBall: state.OptionsReducer.lastBall,
        nominalBallPrice: state.OptionsReducer.nominalBallPrice,
        ballPrice: state.OptionsReducer.ballPrice,
        markerName: state.OptionsReducer.markerName,
        players: state.OptionsReducer.players
    };
};

export default connect(mapStateToProps)(Conditions);
