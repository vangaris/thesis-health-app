import React from "react";
import "./App.css";

import { getExaminations, userProfile } from "./database/utils";

import { Switch, Route } from "react-router-dom";

import SingInSignUp from "./pages/sign-in-sing-up-page/sign-in-sing-up-page.component.jsx";
import Signin from "./components/sign-in/sign-in.component";
import Header from "./components/header/header.components";
import Examinations from "./pages/examinations/examinations.compnent";
import HomePage from "./pages/homapege/homepage.component";
import CreateExamination from "./components/create-examination/create-examination.component";
import MyProfile from "./components/myProfile/myProfile.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  checkIfUserIsAuthenticated = async () => {
    const profile = await userProfile();

    this.setState({
      currentUser: profile.data,
    });
  };

  logOut = () => {
    localStorage.removeItem("token");

    this.setState({
      currentUser: null,
    });
  };

  signinUser = async () => {
    this.checkIfUserIsAuthenticated();
  };

  componentDidMount() {
    this.checkIfUserIsAuthenticated();
    getExaminations();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header logOut={this.logOut} currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/examinations"
            render={() => <Examinations currentUser={currentUser} />}
          />
          <Route
            path="/sign-up-sign-in"
            render={(props) => (
              <SingInSignUp
                currentUser={currentUser}
                signinUser={this.signinUser}
                {...props}
              />
            )}
          />
          <Route path="/createExamination" component={CreateExamination} />
          <Route path="/myprofile" component={MyProfile} />
          <Signin currentUser={currentUser} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
