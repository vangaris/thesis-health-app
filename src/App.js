import React from "react";
import "./App.css";
import Examinations from "./components/examinations-card/examinations.component";
import CreateExamination from "./components/addExamination/addExamination.component";
import Me from "./components/myProfile/me.component";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import Signin from "./components/sign-in/sign-in.component";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Signin />} />
      <Route exact path="/examinations" render={() => <Examinations />} />
      <Route exact path="/add" render={() => <CreateExamination />} />
      <Route exact path="/me" render={() => <Me />} />
    </Switch>
  );
};

export default App;
