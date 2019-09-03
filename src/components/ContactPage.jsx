import React from "react";
import { Facebook, GitHub, Instagram, Linkedin, Twitter } from "react-feather";

const ContactPage = () => {
  return (
    <div className="page contact-page">
      <h1 className="heading">Contact</h1>
      <p className="block">
        If you would like to get in touch, my email is:{" "}
        <strong>jovanovdusan1@gmail.com</strong>.
      </p>
      <p className="block">
        I'm also on{" "}
        <a
          href="https://www.linkedin.com/in/dusanjovanov"
          className="link"
          target="blank"
        >
          LinkedIn
        </a>
        ,{" "}
        <a
          href="https://www.facebook.com/jovanov92"
          className="link"
          target="blank"
        >
          FB
        </a>
        ,{" "}
        <a
          href="https://www.github.com/dusanjovanov"
          className="link"
          target="blank"
        >
          Github
        </a>
        .
      </p>
      <p className="block">Or you can send me a message with the form below.</p>
      <p className="block">Form is not currently working (work in progress).</p>
      <form action="" className="contact-form" netlify>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" />
        <label htmlFor="">Email:</label>
        <input type="email" name="email" />
        <label htmlFor="">Message:</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactPage;
