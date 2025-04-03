import React from "react";
import "./AudioPlayer.css";

const AudioPlayer = ({ src }) => {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <audio controls>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
