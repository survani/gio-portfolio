import React from "react";
import Introduction from "../../containers/introduction/Introduction";
import Projects from "../../containers/projects/projects";

import { MainContainer } from "./style";

const HomePage = () => {
  return (
    <>
      <MainContainer>
        <Introduction />
        <Projects />
      </MainContainer>
    </>
  );
};

export default HomePage;
