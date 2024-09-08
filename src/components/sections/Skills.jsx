import { skillsData } from "../../data/skills";
import { skillsImage } from "../../data/skill-image";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <section className="Skills">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mx-auto text-center heading-with-lines">
          <h5>Skills</h5>
        </div>
        <div className="w-100 my-3 mt-md-5 mt-4">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            // play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div
                className="d-flex flex-column align-items-center justify-content-center m-3 rounded group position-relative"
                key={id}
              >
                <div className="d-flex flex-column align-items-center justify-content-center p-3 gap-lg-3 gap-2 text-center">
                  <img src={skillsImage(skill)} alt={skill} />
                  <h6>{skill}</h6>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills;
