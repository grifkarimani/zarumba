import React, { Component } from "react";
import { connect } from "react-redux";
import { onSetValue } from "./Actions/actions.js";

class PassRecoveryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleChange(key, e) {
        const { setValueByName } = this.props;
        setValueByName(e.target.value, key);
    }
    onSubmit(e) {
        e.preventDefault();
        console.log("recovery");
    }
    render() {
        const { serverMess = "vfbnpg;fos fskgjbkfjs bsfgkjb sfjgbfjs'pbj sf'[gpbj sfg", passRecoveryUserData } = this.props;
        return (
            <div className="css-pass-recovery">
                {serverMess && <div className="server-mess">{serverMess}</div>}
                <form className="css-passRecovery-form" action="">
                    <input
                        className="css-text-input"
                        type="text"
                        placeholder="Email...*"
                        onChange={this.handleChange.bind(this, "email")}
                        value={passRecoveryUserData.email}
                    />
                    <input
                        className="css-text-input"
                        type="password"
                        placeholder="Password...*"
                        onChange={this.handleChange.bind(this, "pass")}
                        value={passRecoveryUserData.pass}
                    />
                    <button className="css-button" onClick={this.onSubmit}>
                        Восстановить
                    </button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        passRecoveryUserData: state.RecoveryReducer
    };
};
const mapDispatchToProps = dispatch => {
    return {
        setValueByName(value, key) {
            dispatch(onSetValue(value, key));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PassRecoveryPage);
