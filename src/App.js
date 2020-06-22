import React, { useReducer, useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import SingInSignUp from "./pages/sign-in-sing-up-page/sign-in-sing-up-page.component.jsx";
import Signin from "./components/sign-in/sign-in.component";
import Header from "../src/components/header/header.components.jsx";
import Examinations from "./pages/examinations/examinations.compnent";
import HomePage from "./pages/homapege/homepage.component";
import CreateExamination from "./components/create-examination/create-examination.component";
import MyProfile from "./components/myProfile/myProfile.component";

import { login } from "./database/utils";

export const currentUserContext = React.createContext();

const initialState = {
  currentUSer: {},
  loggin: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        currentUser: action.value,
        loggin: action.value,
      };
      case "LOGOUT":
      return {
        ...state, loggin: action.value
      }
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <currentUserContext.Provider
        value={{ state, userDispatch: dispatch}}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/examinations" render={() => <Examinations />} />
          <Route path="/sign-up-sign-in" render={(props) => <SingInSignUp />} />
          <Route path="/createExamination" component={CreateExamination} />
          <Route path="/myprofile" component={MyProfile} />
          <Signin />
        </Switch>
      </currentUserContext.Provider>
    </div>
  );
};

export default App;
