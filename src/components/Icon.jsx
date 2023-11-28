import React from "react";
import { SocialIcon } from "react-social-icons";

function Icon(props) {
    const { icon } = props
    console.log(icon)

    return (
        <div className="icon">
            <SocialIcon url={icon} style={{height: 30, width: 30}}/>
        </div>
    )
}

export default Icon;