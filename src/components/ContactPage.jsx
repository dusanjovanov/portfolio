import React from "react";

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
          target="_blank"
        >
          LinkedIn
        </a>
        ,{" "}
        <a
          href="https://www.facebook.com/jovanov92"
          className="link"
          target="_blank"
        >
          FB
        </a>
        ,{" "}
        <a
          href="https://www.github.com/dusanjovanov"
          className="link"
          target="_blank"
        >
          Github
        </a>
        .
      </p>
      <p className="block">Or you can send me a message with the form below.</p>
      <p className="block">Form is not currently working (work in progress).</p>
      <form className="contact-form">
        <label htmlFor="">Name:</label>
        <input type="text" />
        <label htmlFor="">Email:</label>
        <input type="email" />
        <label htmlFor="">Message:</label>
        <textarea></textarea>
        <input type="submit" value="Send" onClick={e => e.preventDefault()} />
      </form>
    </div>
  );
};

export default ContactPage;
