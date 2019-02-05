import React, { Component } from "react";

class LeftBar extends Component {
    render() {
        return (
            <div className="css-left-bar">
                <div className="item socials">
                    <div className="social-item facebook">
                        <i class="css-icon fab fa-facebook" />
                    </div>
                    <div className="social-item vk">
                        <i class="css-icon fab fa-vk" />
                    </div>
                    <div className="social-item email">
                        <i class="css-icon far fa-envelope" />
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftBar;
