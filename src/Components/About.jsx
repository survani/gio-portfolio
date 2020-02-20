import React from "react";

const About = () => {
  return (
    <main>
      <section className="about-header-sect">
        <h1 className="about-header-title">
          Giovani Garfias aka giodev is a full stack web developer.
        </h1>
        <img
          className="about-header-image"
          src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </section>
      <section className="about-body-sect">
        <p className="about-body-title">
          Giovani aka [ giodev ] develops websites. Currently [ giodev ] is
          attending Lambda School to expand his knowledge in programming. In his
          free time he likes to peer program with other devs.
        </p>
      </section>
    </main>
  );
};

export default About;
