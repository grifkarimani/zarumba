import React, { Component } from "react";

export default class PassRecoverySuccess extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push("/enter");
        }, 2000);
    }
    render() {
        return (
            <div className="css-infoPage">
                <div className="info-block">
                    <i class="fas fa-check-circle" />
                    <div className="text">На указанный адрес было отправлено письмо с паролем. Самое время проверить почту...</div>
                </div>
            </div>
        );
    }
}
