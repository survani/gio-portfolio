import React from "react";
import { Text, FlagContainer, Flag } from "./style";

import Sitting from "../../assets/sitting.svg";

const Introduction = () => {
  return (
    <>
      <Text>Full Stack Developer </Text>
      <FlagContainer>
        <Flag src={Sitting} alt="Sitting Person"></Flag>
      </FlagContainer>
    </>
  );
};

export default Introduction;
