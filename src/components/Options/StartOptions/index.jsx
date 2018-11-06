import React from "react";
import { connect } from "react-redux";
import StartOption from "./Option/index";
import _ from "lodash";

import { setOption, increase, reduce } from "../Actions/actions";

class StartOptions extends React.Component {
    TEMPselectOption(e, optionKey) {
        console.log(optionKey);
        console.log(e.target);
    }
    render() {
        const { options, selectOption, onIncrease, onReduce } = this.props;
        let optionsArray = [];
        _.forOwn(options, (value, key) => {
            let option = options[key];
            option.optionKey = key;
            optionsArray.push(option);
        });
        return (
            <div className="css-start-options">
                {optionsArray.map(option => (
                    <StartOption
                        id={option.id}
                        mainLabel={option.mainLabel}
                        key={option.id}
                        optionWithSetContainer={!!option.setContainer}
                        className={option.className}
                        isSelected={option.isSelected}
                        optionKey={option.optionKey}
                        selectOption={selectOption}
                        option1={option.yes}
                        option2={option.no}
                        onIncrease={onIncrease}
                        onReduce={onReduce}
                        setContainer={option.setContainer ? option.setContainer : {}}
                        optionValue={option.optionValue ? option.optionValue : 0}
                    />
                ))}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        options: state.OptionsReducer.options,
        state: state
    };
};
const mapDispatchToProps = dispatch => {
    return {
        selectOption(key, value) {
            dispatch(setOption(key, value));
        },
        onIncrease(key) {
            dispatch(increase(key));
            console.log("INCREASED!!!!!");
        },
        onReduce(key) {
            dispatch(reduce(key));
            console.log("REDUCED!!!!!");
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StartOptions);
