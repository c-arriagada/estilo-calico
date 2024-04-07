import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import VideoCard from "../components/VideoCard";
import {getVideos} from "../client/estilocalico.js"

function Music() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos().then(setVideos);
  }, []);

  const videoCards = videos.map((video) => (
    <VideoCard key={video["id"]} videoObj={video} />
  ));

  return (
    <>
      <NavBar />
      <div className="music">
        <h1>Music</h1>
        <div className="music-content">
          <p className="band-description">
            Estilo Calico is a local Chicago band with a mission of making
            people dance. Rooted from latin american influences, Estilo Calico
            transcends into a new wave.
          </p>
          {videoCards}
        </div>
      </div>
    </>
  );
}

export default Music;
