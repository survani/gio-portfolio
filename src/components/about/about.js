import React from "react";
import {
  AboutSec,
  SubText,
  AboutTitle,
  IntroSec,
  IntroText,
  IntroText2,
  TextContainer,
  Text,
  Links,
} from "./style";

const About = () => {
  return (
    <>
      <IntroSec>
        <TextContainer>
          <IntroText> Giovani Garfias</IntroText>
          <IntroText> Full Stack Developer </IntroText>
          <IntroText> Gamer </IntroText>
          <IntroText2> Scroll Down </IntroText2>
        </TextContainer>
      </IntroSec>
      <AboutSec>
        <AboutTitle>About Me</AboutTitle>
        <SubText> Want to know more about me?</SubText>
        <Text>
          I'm a California based Full Stack Developer. I am currently working at
          Amazon OAK4 Warehouse.
        </Text>
        <Text>
          I'm always looking for new challenges and opportunities to grow as a
          person.
        </Text>
        <Text> Do you have an idea in mind? </Text>
        <Links to="/hire">
          <Text>Hire Me</Text>
        </Links>
      </AboutSec>
    </>
  );
};

export default About;
