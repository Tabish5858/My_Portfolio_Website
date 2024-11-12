import React, { useState } from "react";
import ProjectsCard from "./utils/ProjectsCard";
import { projectsData } from "../../data/projects-data";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 6);

  return (
    <section className="Projects">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mx-auto text-center heading-with-lines">
          <h5>My Projects</h5>
        </div>
        <div className="row gy-4 mt-lg-5 mt-4">
          {visibleProjects.map((project) => (
            <div className="col-lg-6" key={project.id}>
              <ProjectsCard
                imageSrc={project.image}
                banner={project.banner}
                title={project.name}
                description={project.description}
                tools={project.tools}
                duration={project.duration}
                company={project.company}
                companyLink={project.companyLink}
                demoLink={project.demo}
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-lg-5 mt-4">
          <button className="hover1" onClick={handleShowMore}>
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
