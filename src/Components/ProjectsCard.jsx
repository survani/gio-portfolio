import React from "react";

const Projects = props => {
  return (
    <div className="project-card-container">
      <div className="project-main-details">
        <p className="project-name">{props.name}</p>
        <img src={props.image} alt="projectimg" />
      </div>
      <div className="project-sub-details">
        <div className="lang-container">
          <p>Languages: </p>
          <img className="lang-logo" src={props.react} />
          <img className="lang-logo" src={props.html} />
          <img className="lang-logo" src={props.css} />
        </div>
        <a href={props.link}>
          <button className="button-style-1">Explore</button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
