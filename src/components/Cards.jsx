import React, { useEffect, useState } from "react";
import "../index.css";
import CardOne from "../assets/card1-img.png";

const testimonials = [
  {
    name: "Sarah Akpan",
    text: "Before taking this course, I was struggling to understand programming concepts. Now, I can confidently say that I have a strong foundation in coding and can tackle complex problems with ease.",
    color: "yellow",
    image: CardOne,
  },
  {
    name: "John Darl",
    text: "The hands-on projects in this course really helped me apply theoretical concepts to real-world scenarios. I feel prepared to enter the tech industry and contribute meaningfully.",
    color: "purple"
  },
  {
    name: "Micheal Chuku",
    text: "The mentorship I received from the instructors were invaluable. They not only taught me technical skills but also helped me develop a mindset for continuous learning and growth in the tech field.",
    color: "purple"
  }
];

const Cards = () => {
  const [currentStart, setCurrentStart] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStart((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentStart + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <div className="testimonial-container">
      {getVisibleTestimonials().map((t, index) => (
        <div
          key={index}
          className={`testimonial-card ${t.color === "yellow" ? "yellow-bg" : "purple-bg"} fade`}
        >
          {t.image && <img src={t.image} alt={t.name} className="testimonial-img" />}
          <p className="testimonial-text">"{t.text}"</p>
          <p className="testimonial-name">{t.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
