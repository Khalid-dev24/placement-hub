import React, { useState, UseEffect }from "react";

function AboutVideo() {
    const [videoPlaying, setVideoPlaying] = useState(false);

    const handleVideoClick = () => {
    setVideoPlaying(!videoPlaying);
    if (!videoPlaying) {
      setTimeout(() => {
        setVideoPlaying(false);
      }, 2000);
    }
    }

    
  return (
    <section className="video-section">
          <div className="container">
            <div className="video-container">
              {/* Video Card */}
              <div className="video-card" onClick={handleVideoClick}>
                <div className="video-header">
                  <h3 className="video-title">YOUTUBE VIDEO HUMP</h3>
                  <div className="play-button">
                    <div className="play-icon"></div>
                  </div>
                </div>
                <div className="video-content">
                  <div className="video-avatar"></div>
                  <div className="video-info">
                    <h4>Featured Content</h4>
                    <p>Watch Now</p>
                  </div>
                </div>
                <div className="video-overlay">
                  <div className="video-message">
                    <p>Video playing...</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="content-section">
                <div className="expert-item">
                  <div className="expert-icon">
                    <div className="expert-icon-inner"></div>
                  </div>
                  <div className="expert-text">
                    <h4>Expert Guidance</h4>
                    <p>Professional mentorship</p>
                  </div>
                </div>
                
                <div>
                  <p className="content-text">
                    According to the research of Daniels, we have discovered that most people struggle with achieving their goals due to lack of proper guidance and structured approach to learning.
                  </p>
                  <p className="content-text">
                    Our comprehensive program combines theoretical knowledge with practical application, ensuring that participants not only learn but also implement what they've learned in real-world scenarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};

export default AboutVideo;