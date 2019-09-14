import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="page home-page">
      <h1 className="heading">Hi, I'm Dusan Jovanov</h1>
      <p className="block">
        I'm a web developer from Serbia. I primarily do frontend development and
        some backend.
      </p>
      <p className="block">
        My favorite stack is React, Redux, Typescript, Node, Express, and
        MongoDB.
      </p>
      <p className="block">
        I am currently learning PHP (Laravel), Vue, and Angular.
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
