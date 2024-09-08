import React from "react";
import AnimationLottie from "../sections/utils/AnimationLottie";
import experienceAnimation from "../../assets/images/lottie/education.json";
import GlowCard from "./utils/GlowCard";
import { BsPersonWorkspace } from "react-icons/bs";
import { educations } from "../../data/educations";

const Education = () => {
  return (
    <section className="Experience">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mx-auto text-center heading-with-lines">
          <h5>Education</h5>
        </div>
        <div className="row gy-md-0 gy-4 flex-md-row flex-column-reverse pt-5">
          <div className="col-md-6">
            <figure>
              <AnimationLottie animationPath={experienceAnimation} />
            </figure>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column gap-lg-4 gap-3">
              {educations.map((experience) => (
                <GlowCard
                  key={experience.id}
                  identifier={`experience-${experience.id}`}
                >
                  <div className="ExperiencesCard d-flex flex-column gap-lg-3 gap-2">
                    <h6 className="text-center">
                      {`( ${experience.duration} )`}
                    </h6>
                    <div className="d-flex gap-lg-4 gap-3 align-items-center">
                      <figure>
                        <BsPersonWorkspace size={40} />
                      </figure>
                      <div className="d-flex flex-column gap-1">
                        <h4>{experience.title}</h4>
                        <p>{experience.institution}</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
