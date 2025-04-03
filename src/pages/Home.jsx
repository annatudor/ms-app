import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import VideoPlayer from "../components/VideoPlayer";
import AudioPlayer from "../components/AudioPlayer";
import platypus from "../assets/images/platypus.png";
import platypusAudio from "../assets/audio/platypus.mp3";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Slider />

      <section className="about-doctor">
        <h2>About Dr. Doofenshmirtz</h2>
        <p>
          Dr. Heinz Doofenshmirtz is a highly skilled family doctor with a
          passion for innovation. Despite his reputation as an "evil scientist",
          Dr. Doofenshmirtz is dedicated to providing the best medical care to
          his patients. His unique approach combines traditional medicine with
          his own ingenious inventions, making him one of the most sought-after
          doctors in the Tri-State Area.
        </p>
        <p>
          From the <strong>Self-Cooking Dinner</strong> to the{" "}
          <strong>All-Purpose Medical Scanner</strong>, Dr. Doofenshmirtz's
          inventions have revolutionized the healthcare industry. Whether you
          need a routine check-up or a cutting-edge treatment, Dr. Doofenshmirtz
          is here to help!
        </p>
      </section>

      <section className="doctor-video">
        <h2>Meet Dr. Doofenshmirtz</h2>
        <VideoPlayer />
      </section>

      <section className="patient-reviews">
        <h2>What Our Patients Say</h2>
        <div className="reviews-container">
          <blockquote>
            "Dr. Doofenshmirtz is amazing! He cured my back pain with his Inator
            Massage Machine."
            <cite>- Phineas Flynn</cite>
          </blockquote>
          <blockquote>
            "I was skeptical at first, but his Self-Cooking Dinner really saved
            me during my busy days."
            <cite>- Candace Flynn</cite>
          </blockquote>
          <blockquote>
            "Best doctor ever! His All-Purpose Medical Scanner is a
            game-changer."
            <cite>- Ferb Fletcher</cite>
          </blockquote>
        </div>
        <button className="contact-button" onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </section>

      <div className="platypus-audio">
        <img
          src={platypus}
          alt="Platypus"
          onClick={() => document.getElementById("platypus-audio").play()}
          style={{ cursor: "pointer", width: "100px" }}
        />
        <AudioPlayer id="platypus-audio" src={platypusAudio} />
      </div>
    </div>
  );
};

export default Home;
