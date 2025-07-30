import React from 'react';
import CyberImg from '../assets/cybersecurity.png';

function CyberLandingPage() {
  return (
    <div className="landing-wrapper">
      <div className="landing-content">
        <h2 className="landing-title">
          Discover How I Landed My First Cybersecurity Job That Paid Me In Dollars Without Having A Tech Background.
        </h2>
        <p className="landing-subtitle">
            Just two years ago, I had zero tech experience. <br />
            No IT degree. <br />
            No coding background. <br />
            Nothing. <br />
            <br />
            But I knew one thing: I was tired of being underpaid and overworked in a system that wasn’t giving me room to grow. <br />
            <br />
            And I kept seeing people talk about “tech” and “remote jobs” that paid in dollars. <br />
            I thought it was all about coding until I discovered <span>Cybersecurity.</span><br />
            <br />
            Here’s how the game changed from not being able to pay bills with a 9-5 job to becoming financially stable just by working from home for a few hours and getting paid in dollars. <br />
            <br />
            You would want to learn more about the steps I took to achieve all these, right? <br />
            <br />
            Click the button below, to join a workshop that exposes you to the secrets that helped me get started.
        </p>
         <div className="landing-button-container l-before">
          <a href="https://chat.whatsapp.com/Iv2UqRBlXTI1olmIOxdyWx?fbclid=IwQ0xDSwL21F1jbGNrAvbUWWV4dG4DYWVtAjExAAEeghIt3nNTRlRkQpvWWRDn4VdTg7RVMCOmZSZ9QNIaI4DtNhWs4qiWI5rfOVY_aem_98MwvqWv6CMz5i2uwrWuMQ" target= "_blank" className="landing-button">Click Here To Register</a>
        </div>
        <div className="landing-image-container">
          <img src={CyberImg} alt="Placement-hub CyberSecurity" className="landing-image" />
        </div>
        <div className="landing-button-container">
          <a href="https://chat.whatsapp.com/Iv2UqRBlXTI1olmIOxdyWx?fbclid=IwQ0xDSwL21F1jbGNrAvbUWWV4dG4DYWVtAjExAAEeghIt3nNTRlRkQpvWWRDn4VdTg7RVMCOmZSZ9QNIaI4DtNhWs4qiWI5rfOVY_aem_98MwvqWv6CMz5i2uwrWuMQ" target= "_blank" className="landing-button">Click Here To Register</a>
        </div>
      </div>
    </div>
  );
}

export default CyberLandingPage;
