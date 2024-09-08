import React from "react";
import ProjectsCard from "./utils/ProjectsCard";
import { projectsData } from "../../data/projects-data";

const Projects = () => {
  return (
    <section className="Projects">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mx-auto text-center heading-with-lines">
          <h5>My Projects</h5>
        </div>
        <div className="row gy-4 mt-lg-5 mt-4">
          {projectsData.map((project) => (
            <div className="col-lg-6" key={project.id}>
              <ProjectsCard
                imageSrc={project.image}
                title={project.name}
                description={project.description}
                link={project.demo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
