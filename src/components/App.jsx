import React from "react";
import { Route, HashRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import Menu from "./Menu";
import ProjectsPage from "./ProjectsPage";

const App = () => {
  return (
    <HashRouter>
      <div>
        <Menu />
        <Route path="/" exact>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={1000}
              classNames="page"
              unmountOnExit
            >
              <HomePage />
            </CSSTransition>
          )}
        </Route>
        <Route path="/contact">
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={1000}
              classNames="page"
              unmountOnExit
            >
              <ContactPage />
            </CSSTransition>
          )}
        </Route>
        <Route path="/projects">
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={1000}
              classNames="page"
              unmountOnExit
            >
              <ProjectsPage />
            </CSSTransition>
          )}
        </Route>
      </div>
    </HashRouter>
  );
};

export default App;
