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
        <div className="custom-icon">
          <i className={`fas ${icon}`} />
          <div className="header">{header}</div>
        </div>
        <div className="content">
          <div className="text">{text}</div>
        </div>
      </div>
    );
  }
}
