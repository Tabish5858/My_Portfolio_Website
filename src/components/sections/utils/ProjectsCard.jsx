import React from "react";
import { Link } from "react-router-dom";

const ProjectsCard = ({ imageSrc, title, description, link }) => {
  return (
    <>
      <div className="Projects_Hover h-100">
        <figure className="w-100 h-100">
          <img className="w-100 h-100" src={imageSrc} alt={title} />
        </figure>
        <div className="d-flex justify-content-center align-items-center flex-sm-column">
          <h4>{title}</h4>
          <p className="py-lg-3 py-2">{description}</p>
          <div>
            <Link target="_blank" to={link} className="hover2">
              Visit Website
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
