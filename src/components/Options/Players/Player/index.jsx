import React, { Component } from "react";
import TextInput from "../../../Input";

export default class Player extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(inputKey, value) {
        console.log(inputKey, value);
    }
    render() {
        const { canRemove } = this.props;
        return (
            <div className="css-player-name">
                <TextInput onChange={this.onChange} inputKey={this.props.id} />
                {canRemove ? (
                    <div className="css-remove-container">
                        <i class="fas fa-user-times" />
                    </div>
                ) : null}
            </div>
        );
    }
}
