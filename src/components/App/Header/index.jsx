import React from "react";
import log from "../../../media/log.svg";

class Header extends React.Component {
    render() {
        return (
            <div className="css-header">
                <div className="css-logo">
                    <img className="css-loog-image" src={log} alt="" />
                </div>
                <div className="css-header-content">
                    <div className="css-header-info" />
                    <div className="css-navigation" />
                </div>
            </div>
        );
    }
}

export default Header;
