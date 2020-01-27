import React from "react";
import ProjectData from "../Data/ProjectData";
import ProjectsCard from "./ProjectsCard";

const ProjectContainer = () => {
  //checks the data coming in...
  console.log("gg: Project Data", ProjectData);
  return (
    <div>
      <div className="project-title">
        <p>Projects</p>
      </div>
      {ProjectData.map(projects => (
        <ProjectsCard
          key={projects.id}
          name={projects.name}
          description={projects.description}
          image={projects.image}
          link={projects.link}
        />
      ))}
    </div>
  );
};

export default ProjectContainer;
