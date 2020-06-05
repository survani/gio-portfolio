import React from "react";
import ProjectData from "../Data/ProjectData";
import ProjectsCard from "./ProjectsCard";

const ProjectContainer = () => {
  //checks the data coming in...
  console.log("gg: Project Data", ProjectData);
  return (
    <>
      <div className="project-title">
        <p>Projects</p>
      </div>
      <div className="project-inner-card">
        {ProjectData.map(projects => (
          <ProjectsCard
            key={projects.id}
            name={projects.name}
            description={projects.description}
            image={projects.image}
            link={projects.link}
            react={projects.react}
            html={projects.html}
            css={projects.css}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectContainer;
