import React, { Component } from "react";
import { connect } from "react-redux";

class UserInfo extends Component {
    render() {
        const { user } = this.props;
        return (
            <div className="css-user-info">
                <div className="css-ava">
                    <i className="fas fa-user-astronaut" />
                </div>
                <div className="css-info">
                    <div className="css-name">{user.name}</div>
                    <div className="css-email">{user.email}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.AppReducer.currentUser
    };
};
const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInfo);
