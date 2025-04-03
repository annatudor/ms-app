import React from "react";
import Geolocation from "../components/Geolocation";
import "./AboutUs.css";
import Advertisement from "../components/Advertisment";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        Welcome to the clinic of Dr. Heinz Doofenshmirtz, where innovation meets
        healthcare! Located in the heart of the Tri-State Area, our clinic
        offers state-of-the-art medical services combined with Dr.
        Doofenshmirtz's unique inventions.
      </p>
      <p>
        Our mission is to provide exceptional care to our patients while pushing
        the boundaries of medical technology. Whether you need a routine
        check-up or a specialized treatment, Dr. Doofenshmirtz and his team are
        here to help.
      </p>

      <section className="location">
        <h3>Our Location</h3>
        <p>
          Visit us at:{" "}
          <strong>Invention Street, No. 42, Tri-State Area, Romania</strong>
        </p>
        <Geolocation />
      </section>

      <section className="about-video">
        <h3>Discover Our Clinic</h3>
        <Advertisement />
      </section>
    </div>
  );
};

export default AboutUs;
