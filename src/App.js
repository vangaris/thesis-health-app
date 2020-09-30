import React from "react";
import "./App.css";
import Examinations from "./pages/examinations/examinations.component";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";

import Signin from "./components/sign-in/sign-in.component";

const App = () => {
  const log = false;
  return (
    <Router initialEntries={["/create"]}>
      <Switch>
        <Route path="/">{log ? <AppRouter /> : <Signin />}</Route>
      </Switch>
    </Router>
  );
};

export default App;
