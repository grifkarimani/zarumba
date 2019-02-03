import React from "react";
import { connect } from "react-redux";
import StartOption from "./Option/index";
import _ from "lodash";
import { setOption, increase, reduce, onChangeState } from "../Actions/actions";

class StartOptions extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.changeState.bind(this);
    this.increase = this.increase.bind(this);
    this.reduce = this.reduce.bind(this);
  }
  changeState(optionKey, optionState) {
    console.log(optionKey, optionState);
    this.props.changeState(optionKey, optionState);
  }
  increase(optionKey, value) {
    console.log("OPTIONS", optionKey, value);
    this.props.onIncrease(optionKey, value);
  }
  reduce(optionKey, value) {
    console.log("OPTIONS", optionKey, value);
    this.props.onReduce(optionKey, value);
  }
  selectMarker(value) {
    console.log(value);
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
        <div className="css-marker-wrapper">
          {/* <div className="header-icon-container">
            <i className={`css-icon fas fa-marker`} />
          </div> */}
        </div>
        {optionsArray.map(option => (
          <StartOption
            {...option}
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
            optionValue={option.optionValue ? option.optionValue : 0}
            changeState={this.changeState}
            increase={this.increase}
            reduce={this.reduce}
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
    onIncrease(optionKey, value) {
      dispatch(increase(optionKey, value));
      console.log("INCREASED!!!!!");
    },
    onReduce(optionKey, value) {
      dispatch(reduce(optionKey, value));
      console.log("REDUCED!!!!!");
    },
    changeState(optionKey, optionState) {
      dispatch(onChangeState(optionKey, optionState));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartOptions);
