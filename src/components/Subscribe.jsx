import React from "react";


function Subscribe() {  
  return (
    <section className="subscribe">
      <h1>Subscribe to get updates on new courses</h1>
      <p>Stay in touch, so we can reach ot to you with our lasted news and exclusive offers </p>
      <form className="subscribe-form">
        <input
          type="email"
          placeholder="Enter your gmail"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};


export default Subscribe;