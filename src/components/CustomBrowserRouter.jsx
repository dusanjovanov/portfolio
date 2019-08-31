import { BrowserRouter, Route } from "react-router-dom";
import React from "react";

export const RouterContext = React.createContext({});

const CustomBrowserRouter = ({ children }) => {
  return (
    <BrowserRouter>
      <Route>
        {routeProps => (
          <RouterContext.Provider value={routeProps}>
            {children}
          </RouterContext.Provider>
        )}
      </Route>
    </BrowserRouter>
  );
};

export default CustomBrowserRouter;
