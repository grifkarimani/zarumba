import React from "react";
import { connect } from "react-redux";
import StartOption from "./Option/index";
import _ from "lodash";

import { setOption, redRedPoints, incRedPoints, redLastBallPrice, incLastBallPrice, redBallPrice, incBallPrice } from "../Actions/actions";

class StartOptions extends React.Component {
    TEMPselectOption(e) {
        console.log(e.target);
    }
    render() {
        const {
            withReverce,
            lastBallByCost,
            nominalBallPrice,
            payLoosers,
            isRandom,
            onlyYellow,
            redPoints,
            lastBall,
            ballPrice,
            options,

            selectOption,
            increaseRedPoints,
            reduceRedPoints,
            reduceLastBallPrice,
            increaseLastBallPrice,
            reduceBallPrice,
            increaseBallPrice
        } = this.props;
        let optionsArray = [];
        _.forOwn(options, (value, key) => {
            let option = options[key];
            option.optionKey = key;
            optionsArray.push(option);
        });
        console.log("optionsArray", optionsArray);
        return (
            <div className="css-start-options">
                {optionsArray.map(option => (
                    <StartOption
                        key={option.id}
                        optionWithSetContainer={!!option.setContainer}
                        className={option.className}
                        optionIsSelected={option.isSelected}
                        optionKey={option.optionKey}
                        selectOption={this.TEMPselectOption.bind(this)}
                        option1={option.yes}
                        option2={option.no}
                    />
                ))}

                <StartOption
                    optionWithSetContainer={false}
                    className="Reverce"
                    mainLabel="Реверс:"
                    optionIsSelected={withReverce}
                    optionKey="withReverce"
                    selectOption={selectOption}
                    option1="С реверсом"
                    option2="Без реверса"
                />
                <StartOption
                    optionWithSetContainer={false}
                    className="Payment"
                    mainLabel="Оплата света:"
                    optionIsSelected={payLoosers}
                    optionKey="payLoosers"
                    selectOption={selectOption}
                    option1="Только минусовые"
                    option2="Свет на всех"
                />
                <StartOption
                    optionWithSetContainer={false}
                    className="Random"
                    mainLabel="Жеребьевка:"
                    optionIsSelected={isRandom}
                    optionKey="isRandom"
                    selectOption={selectOption}
                    option1="Случайный порядок"
                    option2="В порядке ввода имен"
                />
                <StartOption
                    optionWithSetContainer={true}
                    className="onlyYellow"
                    mainLabel="Игра с красным?"
                    optionIsSelected={onlyYellow}
                    optionKey="onlyYellow"
                    selectOption={selectOption}
                    option1="Только желтый"
                    option2="С красным"
                    setLabel="Красный за:"
                    removeHandler={reduceRedPoints}
                    addHandler={increaseRedPoints}
                    optionValue={redPoints}
                />
                <StartOption
                    optionWithSetContainer={true}
                    className="lastBall"
                    mainLabel="Последний шар за:"
                    optionIsSelected={lastBallByCost}
                    optionKey="lastBallByCost"
                    selectOption={selectOption}
                    option1="Стоимость шара"
                    option2="Установить"
                    setLabel="Последний за:"
                    removeHandler={reduceLastBallPrice}
                    addHandler={increaseLastBallPrice}
                    optionValue={lastBall}
                />
                <StartOption
                    optionWithSetContainer={true}
                    className="ballPrice"
                    mainLabel="Цена шара:"
                    optionIsSelected={nominalBallPrice}
                    optionKey="nominalBallPrice"
                    selectOption={selectOption}
                    option1="Игра на очки"
                    option2="Установить"
                    setLabel="За шар:"
                    removeHandler={reduceBallPrice}
                    addHandler={increaseBallPrice}
                    optionValue={ballPrice}
                />
            </div>
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
        lastBall: state.OptionsReducer.lastBall,
        ballPrice: state.OptionsReducer.ballPrice,
        lastBallByCost: state.OptionsReducer.lastBallByCost,
        nominalBallPrice: state.OptionsReducer.nominalBallPrice,
        options: state.OptionsReducer.options
    };
};
const mapDispatchToProps = dispatch => {
    return {
        selectOption(key, value) {
            console.log("pjbhnvgp;jnv;jsnd;fjvn;sdjfnv;jnsd;fjvnd;sojnfv;ojdsnfv");
            dispatch(setOption(key, value));
        },
        increaseRedPoints() {
            dispatch(incRedPoints());
        },
        reduceRedPoints() {
            dispatch(redRedPoints());
        },
        reduceLastBallPrice() {
            dispatch(redLastBallPrice());
        },
        increaseLastBallPrice() {
            dispatch(incLastBallPrice());
        },
        reduceBallPrice() {
            dispatch(redBallPrice());
        },
        increaseBallPrice() {
            dispatch(incBallPrice());
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StartOptions);
