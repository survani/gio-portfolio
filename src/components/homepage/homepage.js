import React from 'react';
import Navigation from '../../containers/navigation/Navigation';
import Introduction from '../../containers/introduction/Introduction';
import AboutMe from '../../containers/aboutme/AboutMe';

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Introduction />
      <AboutMe />
    </>
  );
};

export default HomePage;
