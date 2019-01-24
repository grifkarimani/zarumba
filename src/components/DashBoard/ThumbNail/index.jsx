import React, { Component } from "react";

export default class thumbNail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const { path, handler } = this.props;
        handler(path);
    }
    render() {
        const { header, text, icon } = this.props;
        return (
            <div className="css-thumbNail" onClick={this.handleClick}>
                <span className="custom-icon">
                    <i class={`fas ${icon}`} />
                </span>
                <div className="content">
                    <div className="header">{header}</div>

                    <div className="text">{text}</div>
                </div>
            </div>
        );
    }
}
