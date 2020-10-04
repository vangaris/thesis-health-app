import React from "react";
import { Switch, Route } from "react-router";
import Examinations from "./components/examinations-card/examinations.component";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/examinations" render={() => <Examinations />} />
    </Switch>
  );
};

export default AppRouter;
