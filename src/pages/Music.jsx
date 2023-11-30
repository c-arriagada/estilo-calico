import React from "react";
import NavBar from "../components/NavBar";
import VideoCard from "../components/VideoCard";


function Music() {

    const musicVideos = [
        "https://www.estilocalico.com/Calle.mp4",
        "https://www.estilocalico.com/HombreLobo.mp4",
        "https://www.estilocalico.com/PassionFruit.mp4",
    ]

    const songs = [
        "Me Llaman Calle Cover",
        "Lobo Hombre en Paris Cover",
        "Passionfruit Cover"
        ]

    const videoComponents = musicVideos.map((video, i) => <VideoCard source={video} songName={songs[i]}/>)
    // key={`video + ${i}`}

    return (
        <>
            <NavBar />
            <div className="music">
                <h1>Music</h1>
                <div className="music-content">
                    <p>Estilo Calico is a local Chicago band with a mission of making people dance. Rooted from latin american influences,
                        Estilo Calico transcends into a new wave.
                    </p>
                    {videoComponents}
                    {/* <video width="700px" height="400px" controls >
                        <source src="https://www.estilocalico.com/Calle.mp4" />
                    </video> */}
                </div>
            </div>
        </>
    )
}

export default Music;