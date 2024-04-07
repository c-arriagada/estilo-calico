import React from "react";

function VideoCard({videoObj}) {

    return (
        <div className="videoCard">
            <video width="700px" height="400px" /*key={key}*/ controls>
                <source src={`https://www.estilocalico.com/videos/${videoObj.pointer}`} type="video/mp4" />
            </video>
            <p className="songName">{videoObj.videos_name}</p>
        </div>
    )
}

export default VideoCard;