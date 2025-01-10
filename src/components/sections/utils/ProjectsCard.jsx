import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProjectsCard = ({
  imageSrc,
  title,
  description,
  tools,
  duration,
  company,
  companyLink,
  demoLink,
  banner,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="position-relative rounded bg-gradient-to-r flex-grow-1 h-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="d-flex flex-row gap-2 p-lf-4 p-3">
        <div className="rounded-circle bg-danger"></div>
        <div className="rounded-circle bg-warning"></div>
        <div className="rounded-circle bg-success"></div>
      </div>
      <div className="border-1 p-lg-4 p-3 d-flex flex-column">
        <figure className="mb-4 h-100">
          <img
            src={banner && !isHovered ? banner : imageSrc}
            alt={imageSrc}
            className="w-100 rounded"
          />
        </figure>
        <code className="d-flex flex-column gap-lg-3 gap-2">
          <div className="d-flex gap-1">
            <span className="me-2 text-green">const</span>
            <span className="me-2 text-white">project</span>
            <span className="me-2 text-pink">=</span>
            <span className="text-gray">{"{"}</span>
          </div>
          <div className="ms-lg-4 ms-3">
            <span className="text-white">title:</span>
            <span className="text-gray">'</span>
            <span className="text-amber">{title}</span>
            <span className="text-gray">',</span>
          </div>
          <div className="ms-lg-4 ms-3 ">
            <span className="text-white">description:</span>
            <span className="text-gray">'</span>
            <span className="text-amber" style={{ whiteSpace: 'pre-line' }}>{description}</span>
            <span className="text-gray">',</span>
          </div>
          <div className="ms-lg-4 ms-3 me-2 d-flex gap-1 flex-wrap">
            <span className="text-white">skills:</span>
            <span className="text-gray">{"["}</span>
            {tools.map((tool, index) => (
              <React.Fragment key={index}>
                <span className="text-amber">"{tool}"</span>
                {index < tools.length - 1 && (
                  <span className="text-gray">, </span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray">{"]"}</span>
          </div>
          <div className="ms-lg-4 ms-3 me-2">
            <span className="text-white">duration:</span>
            <span className="text-gray">'</span>
            <span className="text-amber">{duration}</span>
            <span className="text-gray">',</span>
          </div>
          <div>
            <span className="ms-lg-4 ms-3 me-2 text-white">
              Associated_With:
            </span>
            <span className="text-gray">'</span>
            <span className="text-amber">
              <Link to={companyLink} target="_blank" className="linkHover">
                {company}
              </Link>
            </span>
            <span className="text-gray">',</span>
          </div>
          <div>
            <span className="ms-lg-5 ms-4 text-gray">{"}"};</span>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <Link to={demoLink} target="_blank" className="hover1">
              Visit Website
            </Link>
          </div>
        </code>
      </div>
    </div>
  );
};

export default ProjectsCard;
