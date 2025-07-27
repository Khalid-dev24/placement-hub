import React from "react";
import AboutHeroImage from "../assets/about-hero.png"; // Assuming you have an image for the hero section

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="img-container">
        <img src={AboutHeroImage} alt="about-hero" />
      </div>

      <div className="about-hero-content">
        <h1 className="about-hero-title">About</h1>
        <h2>Placement-Hub</h2>
        <p className="about-hero-description">
          Premiere Career Acceleration Hub 
        </p>
      </div>
    </section>
  );
};

export default AboutHero;