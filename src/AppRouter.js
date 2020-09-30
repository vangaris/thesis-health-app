import React from "react";
import { Switch, Route } from "react-router";
import Examinations from "./pages/examinations/examinations.component";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/examinations" render={() => <Examinations />} />
    </Switch>
  );
};

export default AppRouter;
