import React, { useEffect, useState } from "react";
import Hero1 from "../assets/hero1.png";
import Hero2 from "../assets/hero2.png"; 
import Hero3 from "../assets/hero3.png";
import Hero4 from "../assets/hero4.png";

const heroContents = [
  {
    title: "Earn up to $60,000 with just a tech skill",
    image: Hero1,
  },
  {
    title: "Bridging the Gap Between Dreams and Reality",
    paragraph: "We help you turn your aspirations into achievements with our comprehensive tech courses.",
    image: Hero2,
  },
  {
    title: "Upgrade your skills and income",
    image: Hero3,
  },
  {
    title: "Join a community of achievers",
    image: Hero4,
  },
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroContents.length);
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

  const { title, image, paragraph } = heroContents[index];

  return (
    <section
      className={`hero fade-in${index === 0 ? " hero--first" : ""}`}
    >
      <div className="hero-subtitle">
           <h1>{title}</h1>
            {paragraph && <h2>{paragraph}</h2>}
            <div>
                <button className="cta-button">Get Started</button>
                <button className="secondary-button">
                Learn More
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1719 6L8.92188 11.1962V0.803848L17.1719 6Z" fill="#FFFDFD"/>
                    <rect x="0.171875" y="5" width="12" height="3" fill="#FFFDFD"/>
                </svg>
                </button>
            </div>
      </div>
      <div className="hero-image">
        <img src={image} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;