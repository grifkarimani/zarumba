import React from "react";
import { Link, withRouter } from "react-router-dom";

class Overlay extends React.Component {
    render() {
        const {
            message = "",
            guestion = "",
            page = "",
            confirmButtonLabel,
            confirmButtonHendler,
            abortButtonLabel,
            abortButtonHendler,
            overlayKey
        } = this.props;
        return (
            <div className="css-overlay-container">
                <div className="css-overlay" />
                <div className="css-overlay-content">
                    <div className="css-over-title">{message}</div>
                    <div className="css-over-title">{guestion}</div>
                    <div className="css-over-controls">
                        {overlayKey === "gameOver" ? (
                            <Link to="/results" className="css-button">
                                {confirmButtonLabel}
                            </Link>
                        ) : (
                            <button className="css-button" onClick={confirmButtonHendler.bind(this, true)}>
                                {confirmButtonLabel}
                            </button>
                        )}
                        {abortButtonHendler && (
                            <button className="css-button" onClick={abortButtonHendler.bind(this, false)}>
                                {abortButtonLabel}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Overlay;
