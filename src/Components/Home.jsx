import React from "react";

import JavaScript from "./Assets/Javascript.png";
import ReactLogo from "./Assets/React.png";
import CSS from "./Assets/Css.png";
import HTML from "./Assets/Html5.png";
import People from "./Assets/people.png";

const Home = () => {
  return (
    <div className="home-bio-container">
      {/* Introduction */}
      <section className="home-introduction">
        <img alt="people" className="people" src={People} />
        <h1>Hey there, I am Giovani Garfias.</h1>
        <h2>I love coding.</h2>
        <div className="home-social-icons">
          <a href="https://twitter.com/garfias_giovani">
            <img
              className="icon"
              alt=""
              src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/6478509201551953708-128.png"
            />
          </a>
          <a href="https://github.com/survani">
            <img
              className="icon"
              alt=""
              src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/13702699181561032680-128.png"
            />
          </a>
          <a href="https://www.linkedin.com/in/giovani-garfias-abb206105/">
            <img
              className="icon"
              alt=""
              src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/16090541531530099327-128.png"
            />
          </a>
          <a href={"/about"}>
            <img
              className="icon"
              alt=""
              src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/21399810441555589926-128.png"
            />
          </a>
          {/*This will include all the icons that links into my social networks.*/}
        </div>
      </section>
      {/* [END] Introduction */}

      {/* TODO Move this to its own component... */}
      <section className="skills-section">
        <div className="skill-title">
          <h2>Skills</h2>
        </div>
        <div className="skill-icon">
          <img className="skill-img" alt="HTML Logo" src={HTML} />
          <img className="skill-img" alt="CSS Logo" src={CSS} />
          <img className="skill-img" alt="JavaScript Logo" src={JavaScript} />
          <img className="skill-img" alt="React Logo" src={ReactLogo} />
        </div>
      </section>
      {/* [END] Skill Section */}
    </div>
  );
};

export default Home;
