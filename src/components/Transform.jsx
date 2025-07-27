import React from "react";
import TansformImg from "../assets/transform-img.png";

function Transform() {
  return (
    <section className="transform">
        <div className="leftside">
            <h1>Transform into a <br />Tech Professional </h1>
            <div className="transform-icons">
                <div className="icn icon1">
                    <svg width="91" height="90" viewBox="0 0 91 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.6719 82.5C66.3826 82.5 83.1719 65.7107 83.1719 45C83.1719 24.2893 66.3826 7.5 45.6719 7.5C24.9612 7.5 8.17188 24.2893 8.17188 45C8.17188 65.7107 24.9612 82.5 45.6719 82.5Z" stroke="#3E1D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M45.6719 22.5V45L60.6719 52.5" stroke="#3E1D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>Productive Hours of <br />Training</p>
                </div>

                <div className="icn icon2">
                    <svg width="91" height="90" viewBox="0 0 91 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64.4219 67.5C64.4219 62.5272 62.4464 57.7581 58.9301 54.2417C55.4138 50.7254 50.6447 48.75 45.6719 48.75C40.6991 48.75 35.9299 50.7254 32.4136 54.2417C28.8973 57.7581 26.9219 62.5272 26.9219 67.5" stroke="#3E1D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M45.6719 33.75V7.5" stroke="#3E1D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.4971 38.3252L21.8221 43.6502" stroke="#3E1D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.42188 67.5H11.9219" stroke="#3E1D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M79.4219 67.5H86.9219" stroke="#3E1D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69.522 43.6502L74.847 38.3252" stroke="#3E1D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M86.9219 82.5H4.42188" stroke="#3E1D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M60.6719 18.75L45.6719 33.75L30.6719 18.75" stroke="#3E1D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>Amazing Portfolio <br /> Development</p>
                </div>

                <div className="icn icon3">
                    <svg width="91" height="90" viewBox="0 0 91 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M67.4219 17C64.4382 17 61.5767 18.1853 59.4669 20.295C57.3571 22.4048 56.1719 25.2663 56.1719 28.25V73.25C56.1719 76.2337 57.3571 79.0952 59.4669 81.205C61.5767 83.3147 64.4382 84.5 67.4219 84.5C70.4056 84.5 73.267 83.3147 75.3768 81.205C77.4866 79.0952 78.6719 76.2337 78.6719 73.25C78.6719 70.2663 77.4866 67.4048 75.3768 65.295C73.267 63.1853 70.4056 62 67.4219 62H22.4219C19.4382 62 16.5767 63.1853 14.4669 65.295C12.3571 67.4048 11.1719 70.2663 11.1719 73.25C11.1719 76.2337 12.3571 79.0952 14.4669 81.205C16.5767 83.3147 19.4382 84.5 22.4219 84.5C25.4056 84.5 28.267 83.3147 30.3768 81.205C32.4866 79.0952 33.6719 76.2337 33.6719 73.25V28.25C33.6719 25.2663 32.4866 22.4048 30.3768 20.295C28.267 18.1853 25.4056 17 22.4219 17C19.4382 17 16.5767 18.1853 14.4669 20.295C12.3571 22.4048 11.1719 25.2663 11.1719 28.25C11.1719 31.2337 12.3571 34.0952 14.4669 36.205C16.5767 38.3147 19.4382 39.5 22.4219 39.5H67.4219C70.4056 39.5 73.267 38.3147 75.3768 36.205C77.4866 34.0952 78.6719 31.2337 78.6719 28.25C78.6719 25.2663 77.4866 22.4048 75.3768 20.295C73.267 18.1853 70.4056 17 67.4219 17Z" stroke="#3E1D67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>Mentorship</p>
                </div>
            </div>
            <button className="transform-btn"><a href="/courses">View all Courses</a></button>
        </div>

        <div className="right">
            <img src={TansformImg} alt="Transform" />
        </div>
      
    </section>
  );
};

export default Transform;


