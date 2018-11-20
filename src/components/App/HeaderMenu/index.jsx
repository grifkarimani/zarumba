import React, { Component } from "react";
import { connect } from "react-redux";
import { onLogOut, onTooglMenu } from "../Actions/actions";

class HeaderMenu extends Component {
    constructor(props) {
        super(props);
        this.togglMenu = this.togglMenu.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    }
    togglMenu() {
        this.props.tooglMenu();
    }
    handleLogOut() {
        this.props.logOut();
        this.props.router.history.push("/");
        console.log("handleLogOut", this.props);
    }
    render() {
        console.log("handleLogOut", this.props);
        const { isOpen } = this.props;
        return (
            <div className="css-menu">
                <div className="css-menu-button" onClick={this.togglMenu}>
                    <i className={["fas", isOpen ? "fa-chevron-circle-up" : "fa-chevron-circle-down"].join(" ")} />
                </div>
                {isOpen && (
                    <div className="css-menu-content">
                        <div className="css-menu-option">Статистика</div>
                        <div className="css-menu-option">Профиль</div>
                        <div className="css-menu-option">Мои игры</div>
                        <div className="css-menu-option">Мой конь</div>
                        <div className="css-menu-option">Не мой конь</div>
                        <div className="css-menu-option">Конь не мой</div>
                        <div className="css-menu-option" onClick={this.handleLogOut}>
                            Выход
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.AppReducer.currentUser,
        isOpen: state.AppReducer.visibilityState.menu,
        router: state.router
    };
};
const mapDispatchToProps = dispatch => {
    return {
        logOut() {
            dispatch(onLogOut());
        },
        tooglMenu() {
            dispatch(onTooglMenu());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderMenu);
