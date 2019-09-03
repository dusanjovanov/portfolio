import React from "react";
import ghSearchImg from "../../public/img/gh-search.png";
import portfolioImg from "../../public/img/portfolio.png";
import todoImg from "../../public/img/todo.png";

const ProjectsPage = () => {
  return (
    <div className="page projects-page">
      <h1 className="heading">Projects</h1>
      <p className="block">
        These are a few of my projects that I've selected.
      </p>
      <p className="block">
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
      <hr />
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
          <p className="block">
            Github search app featuring use of query parameters, REST API, form
            validation, and mobile responsivness, and more.
          </p>
          <p className="block">
            <strong>Tools used:</strong> React, Typescript, Github API, UIKit.
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
      <div className="projects-list">
        <div className="project">
          <h2 className="title">
            <a href="https://todo-jodu.herokuapp.com" target="blank">
              Todo app
            </a>
          </h2>
          <div className="thumb">
            <img src={todoImg} />
          </div>
          <p className="block">
            A Todo app featuring React server-side rendering, Redux with state
            preloading, component animations, REST API design, and more.
          </p>
          <p className="block">
            <strong>Tools used:</strong> React, Redux, Typescript, Node,
            Express.
          </p>
          <a
            className="view-source"
            href="https://github.com/dusanjovanov/todo-app"
            target="blank"
          >
            View source
          </a>
        </div>
      </div>
      <div className="project">
        <h2 className="title">Portfolio</h2>
        <div className="thumb">
          <img src={portfolioImg} />
        </div>
        <p className="block">
          This app features animated page transitions, routing, responsive
          design, and more.
        </p>
        <p className="block">
          <strong>Tools used:</strong> React, Javascript, SCSS, React Router,
          React Transition Group.
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

export default ProjectsPage;
