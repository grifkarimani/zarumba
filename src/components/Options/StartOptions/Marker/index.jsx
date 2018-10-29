import React from "react";
import Select from "react-select";
import { connect } from "react-redux";

import { setMarker } from "../../Actions/actions";

class Marker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerListIsVisible: false
        };
    }
    showPlayerList() {
        if (this.props.players[0].name !== "" && this.props.players[1].name !== "") {
            this.setState({ playerListIsVisible: true });
        }
    }
    hidePlayerList() {
        this.setState({ playerListIsVisible: false });
    }
    selectMarker(selectedOption) {
        this.props.setMarkerName(selectedOption);
        this.hidePlayerList();
    }
    render() {
        const { markerName, setMarkerName, players } = this.props;
        let members = players.map(it => it);
        return (
            <div className="css-marker">
                <div className="css-marker-name">
                    <Select value={markerName} onChange={this.selectMarker.bind(this)} placeholder="Маркёр..." options={members} />
                    {/* <input
                        className="css-text-input"
                        type="text"
                        value={markerName}
                        list="players"
                        placeholder="Сегодня маркёрит..."
                        onChange={setMarkerName}
                        onKeyDown={this.hidePlayerList.bind(this)}
                        onFocus={this.showPlayerList.bind(this)}
                    />
                    <div id="players" className={["css-datalist", this.state.playerListIsVisible ? "visible" : ""].join(" ")}>
                        <button onClick={this.hidePlayerList.bind(this)}>X</button>
                        {players.map(it => (
                            <option className="css-datalist-option" key={it.id} onClick={this.selectMarker.bind(this)}>
                                {it.name}
                            </option>
                        ))}
                    </div> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        markerName: state.OptionsReducer.markerName,
        players: state.OptionsReducer.players
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setMarkerName(event) {
            dispatch(setMarker(event));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Marker);
