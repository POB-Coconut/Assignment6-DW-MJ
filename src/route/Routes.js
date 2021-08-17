import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import { ROUTES } from "utils/constants";

const Routes = () => {
  return (
    <Switch>
      <Route path={ROUTES.HOME} exact={true} component={Home} />
    </Switch>
  );
};

export default Routes;
