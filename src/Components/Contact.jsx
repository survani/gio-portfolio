import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-header">
        <div className="contact-title">
          <h2>Contact</h2>
        </div>
      </section>
      <section className="contact-body">
        <a href="mailto:giovanicode@outlook.com">
          Please contact me through <span>email.</span>
        </a>
      </section>
    </div>
  );
};

export default Contact;
