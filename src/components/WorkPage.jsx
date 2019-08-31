import React from "react";
import ghSearchImg from "../assets/gh-search.png";
import portfolioImg from "../assets/portfolio.png";

const WorkPage = () => {
  return (
    <div className="page work-page">
      <h1 className="heading">Projects</h1>
      <p className="text">These are a few of my projects that I've selected.</p>
      <p className="text">
        For a full list of my projects go to my{" "}
        <a
          href="https://www.github.com/dusanjovanov"
          className="link"
          target="blank"
        >
          Github
        </a>{" "}
        and my{" "}
        <a
          href="https://www.codepen.io/dusanjovanov92"
          className="link"
          target="blank"
        >
          Codepen
        </a>
        .
      </p>
      <div className="projects-list">
        <div className="project">
          <h2 className="title">
            <a
              href="https://dusanjovanov.github.io/projects/github-search"
              target="blank"
            >
              Github Search
            </a>
          </h2>
          <div className="thumb">
            <img src={ghSearchImg} />
          </div>
          <p className="description">
            Github search app featuring use of query parameters, REST API, form
            validation, and mobile responsivness.
          </p>
          <p className="tools">
            <strong>Tools used:</strong> React, Typescript, UIKit
          </p>
          <a
            className="view-source"
            href="https://github.com/dusanjovanov/github-search"
            target="blank"
          >
            View source
          </a>
        </div>
      </div>
      <div className="project">
        <h2 className="title">
          <a href="https://dusanjovanov.github.io/" target="blank">
            Portfolio app
          </a>
        </h2>
        <div className="thumb">
          <img src={portfolioImg} />
        </div>
        <p className="description">
          This app features animated page transitions, routing, responsive
          design.
        </p>
        <p className="tools">
          <strong>Tools used:</strong> React, Javascript, Sass, React Router,
          React Transition Group
        </p>
        <a
          className="view-source"
          href="https://github.com/dusanjovanov/portfolio"
          target="blank"
        >
          View source
        </a>
      </div>
    </div>
  );
};

export default WorkPage;
