import React from "react";

class Overlay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            message = "",
            guestion = "",
            page = "",
            confirmButtonLabel,
            confirmButtonHendler,
            abortButtonLabel,
            abortButtonHendler
        } = this.props;
        return (
            <div className="css-overlay-container">
                <div className="css-overlay" />
                <div className="css-overlay-content">
                    <div className="css-over-title">{message}</div>
                    <div className="css-over-title">{guestion}</div>
                    <div className="css-over-controls">
                        {confirmButtonLabel && (
                            <button
                                className="css-button"
                                onClick={confirmButtonHendler.bind(
                                    this,
                                    page ? page : true
                                )}
                            >
                                {confirmButtonLabel}
                            </button>
                        )}
                        {abortButtonLabel && (
                            <button
                                className="css-button"
                                onClick={abortButtonHendler.bind(this, false)}
                            >
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
