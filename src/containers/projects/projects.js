import React from 'react';

import {
  HeaderContainer,
  Header,
  ProjectContainer,
  Project,
  ProjectTitle,
} from './style';
const Projects = () => {
  return (
    <>
      <HeaderContainer>
        <Header>See My Projects</Header>
      </HeaderContainer>
      <ProjectContainer>
        <Project>
          <ProjectTitle href="https://frosty-shaw-74dc5f.netlify.app/">
            Chef Portfolio
          </ProjectTitle>
        </Project>
        <Project>
          <ProjectTitle href="https://betterprofessorweb.netlify.app/">Better Professor</ProjectTitle>
        </Project>
        <Project>
          <ProjectTitle href="https://elegant-aryabhata-cdd64e.netlify.app/">
            Keep Savvy
          </ProjectTitle>
        </Project>
      </ProjectContainer>
    </>
  );
};

export default Projects;
