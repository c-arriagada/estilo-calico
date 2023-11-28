import React from "react";

function VideoCard(props) {
    const { source, songName, key } = props;

    return (
        <div className="videoCard">
            <video width="700px" height="400px" /*key={key}*/ controls>
                <source src={source} type="video/mp4" />
            </video>
            <p className="songName">{songName}</p>
        </div>
    )
}

export default VideoCard;