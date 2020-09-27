import React from "react";
import "./App.css";
import Examinations from "./pages/examinations/examinations.compnent";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import Signin from "./components/sign-in/sign-in.component";

const App = () => {
  return (
    <Router initialEntries={["/examinations"]} initialIndex={0}>
      <Switch>
        <Route path="/resetPasswordForm">
          {
            <>
              <Signin />
            </>
          }
        </Route>

        {/* <Route path="/">{loggedIn ? <AppRouter /> : <LoginPageUi />}</Route> */}
      </Switch>
    </Router>
  );
};

export default App;
