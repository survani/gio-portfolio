import React from "react";
import { Header, NavContainer, Links } from "./style";

const Navigation = () => {
  return (
    <>
      <Header>
        <NavContainer>
          <Links href="/">Home</Links>
          <Links href="/about">About Me</Links>
        </NavContainer>
      </Header>
    </>
  );
};

export default Navigation;
