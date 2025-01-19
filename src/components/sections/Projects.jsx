import React, { useState } from "react";
import ProjectsCard from "./utils/ProjectsCard";
import { projectsData } from "../../data/projects-data";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState("ALL");

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  // Extract unique tools using only the first tool from each project
  const allTools = [
    "ALL",
    ...new Set(projectsData.map((project) => project.tools[0].toUpperCase())),
  ];

  // Filter projects based on active tab using first tool only
  const filterProjects = () => {
    if (activeTab === "ALL") {
      return showAll ? projectsData : projectsData.slice(0, 6);
    }

    const filtered = projectsData.filter(
      (project) => project.tools[0].toUpperCase() === activeTab
    );
    return showAll ? filtered : filtered.slice(0, 6);
  };

  const visibleProjects = filterProjects();

  return (
    <section className="Projects">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mx-auto text-center heading-with-lines">
          <h5>My Projects</h5>
        </div>

        {/* Tabs */}
        <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
          {allTools.map((tool) => (
            <button
              key={tool}
              className={`px-4 py-2 rounded-pill ${
                activeTab === tool
                  ? "hover2"
                  : "hover1"
              }`}
              onClick={() => setActiveTab(tool)}
            >
              {tool}
            </button>
          ))}
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

        {visibleProjects.length > 6 && (
          <div className="d-flex justify-content-center mt-lg-5 mt-4">
            <button className="hover1" onClick={handleShowMore}>
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
