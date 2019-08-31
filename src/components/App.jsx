import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import ContactPage from "./ContactPage";
import CustomBrowserRouter from "./CustomBrowserRouter";
import HomePage from "./HomePage";
import Menu from "./Menu";
import WorkPage from "./WorkPage";

const App = () => {
  return (
    <CustomBrowserRouter>
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
        <Route path="/work">
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={1000}
              classNames="page"
              unmountOnExit
            >
              <WorkPage />
            </CSSTransition>
          )}
        </Route>
      </div>
    </CustomBrowserRouter>
  );
};

export default App;
