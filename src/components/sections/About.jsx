import React from "react";
import profilePic from "../../assets/images/index/profile_Pic.png"

const About = () => {
  return (
    <section className="About">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mx-auto text-center heading-with-lines">
          <h5>About Me</h5>
        </div>
        <div className="row gy-md-0 gy-4 pt-5">
          <div className="col-md-6">
            <div className="d-flex flex-column gap-lg-4 gap-3 text-md-start text-center justify-content-center h-100">
              <h4>WHO I AM?</h4>
              <h5>
                I’m a passionate Frontend Developer with a strong foundation in
                HTML, CSS, JavaScript, and React. With experience working on
                responsive, user-focused web applications, I strive to create
                seamless and engaging digital experiences. My projects include
                cybersecurity platforms, fintech solutions, and AI-powered
                applications. I thrive in solving complex problems with a
                creative, detail-oriented approach. Let’s build something
                amazing together!
              </h5>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <figure className="d-flex justify-content-center align-items-center">
              <img src={profilePic} alt="profilePic" className="w-100"/>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
