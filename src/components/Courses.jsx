import React from "react";
import Navbar from "./Navbar";
import Inspired from "./inspired";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import Studies from "./Studies";
import Hero from "./Hero";
import TransitionImg from "../assets/transition-img.png";



function Courses() {
  return (
    <div className="courses-container">
      <Navbar />
      <Hero />
      <section className="courses-intro">
        <h1>Courses</h1>
        <p>Explore our range of courses designed to equip you with the skills needed for a successful career in tech.</p>
      </section>
      <Studies />
      <Inspired />
      <Subscribe />
      <Footer />
    </div>
  );
};


export default Courses;