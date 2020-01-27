import React from "react";

const Projects = props => {
  return (
    <div className="project-card-container">
      <img alt={props.name} src={props.image} />
      <div className="project-card-details">
        <div className="project-name">
          <p>{props.name}</p>
        </div>
        <div className="project-description">
          <p>{props.description}</p>
        </div>
        <div className="project-link">
          <a href={props.link}>Check it Out</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
