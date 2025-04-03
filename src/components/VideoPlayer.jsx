import React from "react";
import doofenshmirtzVideo from "../assets/videos/doofenshmirtz.mp4";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <video controls width="100%">
        <source src={doofenshmirtzVideo} type="video/mp4" />
        Browserul tău nu suportă elementul video.
      </video>
    </div>
  );
};

export default VideoPlayer;
