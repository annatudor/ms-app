import React from 'react';
import './Geolocation.css';

const Geolocation = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h2>Locația Cabinetului</h2>
      <p>Strada Invențiilor, Nr. 42, Tri-State Area, România</p>
      <iframe
        title="Dr. Doofenshmirtz Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.869347038038!2d26.10221531551889!3d44.43643797910216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f8c8b9b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sTri-State%20Area%2C%20Romania!5e0!3m2!1sen!2sro!4v1629999999999!5m2!1sen!2sro"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Geolocation;