import React from "react";
import Navbar from "./Navbar";
import Inspired from "./inspired";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import TransitionImg from "../assets/transition-img.png";



function Courses() {
  return (
    <div className="courses-container">
      <Navbar />
      
      <Inspired />
      <Subscribe />
      <Footer />
    </div>
  );
};


export default Courses;