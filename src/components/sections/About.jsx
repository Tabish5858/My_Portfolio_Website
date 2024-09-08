import React from "react";
import AnimationLottie from "../sections/utils/AnimationLottie";
import experienceAnimation from "../../assets/images/lottie/coding.json";

const About = () => {
  return (
    <section className="About" >
      <div className="container">
        <div className="row gy-md-0 gy-4">
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
          <div className="col-md-6">
            <figure className="d-flex justify-content-center align-items-center">
              <AnimationLottie animationPath={experienceAnimation} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
