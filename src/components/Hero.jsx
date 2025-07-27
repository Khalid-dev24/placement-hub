import React from "react";
import Hero1 from "../assets/hero-back.png";
import Hero2 from "../assets/hero2.png"; 
import Hero3 from "../assets/hero3.png";
import Hero4 from "../assets/hero4.png";


function HeroSection () {
   return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${Hero1})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Join the Next Generation of Tech Leaders!</h1>
        <p className="hero-subtitle">
          Become a Globally Relevant Tech Expert; <br />Learn Cybersecurity, DevOps, Data Analytics, and AI/ML.
        </p>
        <div className="hero-buttons">
          <button className="get-started"><a href="/contact">Apply Now!</a></button>
          {/* <button className="learn-more">Learn More ➜</button> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
