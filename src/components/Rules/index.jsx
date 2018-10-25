import React from "react";
import { Link } from "react-router-dom";
class Rules extends React.Component {
    render() {
        return (
            <div className="css-rules componentContainer">
                <div className="css-600pxContainer">
                    <p>Правила в разработке. А пока только Rock'n'Roll...</p>
                </div>
                <div className="css-controls">
                    <button className="css-button">
                        <Link to="/options">Options</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default Rules;
