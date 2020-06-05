import React from 'react';
import {
  AboutMeSection,
  AboutTitle,
  AboutContent,
  AboutImage,
  AboutHeader,
} from './style';
import AboutMeImage from '../../assets/aboutme.svg';
const AboutMe = () => {
  return (
    <>
      <AboutMeSection>
        <div>
          <AboutTitle>About Me</AboutTitle>
        </div>
        <AboutContent>
          <AboutImage src={AboutMeImage}></AboutImage>
          <AboutHeader>My Story</AboutHeader>
        </AboutContent>
      </AboutMeSection>
    </>
  );
};

export default AboutMe;
