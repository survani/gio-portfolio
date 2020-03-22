import React, { useState } from "react";

const Contact = props => {
  console.log(props);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setContact({ name: "", email: "", message: "" });
    props.history.push("/");
  };
  return (
    <>
      <h1>Hell0</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          value={contact.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="First Name"
          value={contact.message}
          onChange={handleChange}
        />
        <button>Send</button>
      </form>
    </>
  );
};

export default Contact;
