import React from "react";
import "./Advertisment.css";
import doofenshmirtzVideo from "../assets/videos/Doofenshmirtz_Inc_Advert.mp4";
const Advertisement = () => {
  return (
    <div className="video-player">
      <video controls width="100%">
        <source src={doofenshmirtzVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Advertisement;
