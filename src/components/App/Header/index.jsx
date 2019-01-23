import React from "react";
import { connect } from "react-redux";
import UserInfo from "../UserInfo";
import HeaderMenu from "../HeaderMenu";

class Header extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div className="css-header">
                {user && <UserInfo />}
                {user && <HeaderMenu />}
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
)(Header);
