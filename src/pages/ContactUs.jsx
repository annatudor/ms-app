import React from "react";
import ContactForm from "../components/ContactForm";
import doofenshmirtzImage from "../assets/images/doofenshmirtz.jpg";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>
        Do you have questions or need more information about our services? Feel
        free to reach out to us! Dr. Doofenshmirtz and his team are here to help
        you with all your medical needs.
      </p>
      <ContactForm />
      <img
        src={doofenshmirtzImage}
        alt="Dr. Doofenshmirtz"
        className="contact-image"
      />
    </div>
  );
};

export default ContactUs;
