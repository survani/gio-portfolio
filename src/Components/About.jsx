import React from "react";

const About = () => {
  return (
    <main className="about-container">
      <section className="about-header-sect">
        <h1 className="about-header-title">Full Stack Web Developer</h1>
        <img
          className="about-header-image"
          src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </section>
      <p className="about-body-title">
        Giovani develops websites. Currently attending Lambda School to expand
        his knowledge in programming. In his free time he likes to peer program
        with other devs.
      </p>
    </main>
  );
};

export default About;
