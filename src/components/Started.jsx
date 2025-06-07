import React from "react";
import StartedImg from "../assets/started-img.png";


function Started() {
  return (
    <section className="started fade-in">
        <h1>Lets get Started</h1>
        <div className="started-content">
            <div className="leftside">
                <p>Amazing Tech Skills you can acquire here at Placement-Hub</p>

                <ul>
                    <li>Design</li>
                    <li>Build</li>
                    <li>Analyse</li>
                    <li>Test & Security</li>
                </ul>

                <button>Subscribe</button>
            </div>

            <div className="rightside">
                <img src={StartedImg} alt="Started" />
            </div>
        </div>
    </section>
  );
};


export default Started;