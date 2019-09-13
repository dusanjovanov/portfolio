import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="page home-page">
      <h1 className="heading">Hi, I'm Dušan Jovanov</h1>
      <p className="block">
        I'm a web developer from Serbia. I primarily do frontend development and
        some backend in Node.js.
      </p>
      <p className="block">
        {" "}
        My favorite technologies are React and Typescript. I'm interested in
        learning Vue.js.
      </p>
      <p className="block">
        You can find me on{" "}
        <a
          className="link"
          href="https://www.linkedin.com/in/dusanjovanov"
          target="_blank"
        >
          LinkedIn
        </a>
        , check out some of my{" "}
        <Link to="/projects" className="link">
          Projects
        </Link>
        , or go to the{" "}
        <Link to="/contact" className="link">
          Contact
        </Link>{" "}
        page for more info.
      </p>
    </div>
  );
};

export default HomePage;
