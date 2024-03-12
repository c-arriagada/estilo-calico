import React from "react";
import { SocialIcon } from "react-social-icons";

function Icon(props) {
    const { icon } = props
    console.log(icon)

    return (
        <div className="icon">
            <SocialIcon url={icon} className="icon-graphic" style={{ height: 50, width: 50}} />
        </div>
    )
}

export default Icon;