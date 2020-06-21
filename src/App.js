import React, { useReducer, useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import SingInSignUp from "./pages/sign-in-sing-up-page/sign-in-sing-up-page.component.jsx";
import Signin from "./components/sign-in/sign-in.component";
import Header from '../src/components/header/header.components.jsx'
import Examinations from "./pages/examinations/examinations.compnent";
import HomePage from "./pages/homapege/homepage.component";
import CreateExamination from "./components/create-examination/create-examination.component";
import MyProfile from "./components/myProfile/myProfile.component";

import { userProfile, login } from "./database/utils";

export const currentUserContext = React.createContext();

const initialState = {
  user: {},
  loggedIn: false,
  examinations:[]
}

const reducer = (state, action) => {
  switch(action.type){
    case 'LOGIN':
      return {
        user: action.user,
        loggedIn: true, 
        examinations: action.examinations}
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    login("http://localhost:3000/users/login", {
      email: "ag@gmail.com",
      password: "pass1234",
    }).then((data) => {
      dispatch({type:'LOGIN', user: data, loggedIn: true, examinations:['1','2','3']})
    });
  }, []);

  console.log(state);
//hooks
  return (
    <div className="App">
      <currentUserContext.Provider  value={state}>
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

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentUser: null,
//     };
//   }

//   checkIfUserIsAuthenticated = async () => {
//     const profile = await userProfile();

//     this.setState({
//       currentUser: profile.data,
//     });
//   };

//   logOut = () => {
//     localStorage.removeItem("token");

//     this.setState({
//       currentUser: null,
//     });
//   };

//   signinUser = async () => {
//     this.checkIfUserIsAuthenticated();
//   };

//   componentDidMount() {
//     this.checkIfUserIsAuthenticated();
//     getExaminations();
//   }

//   render() {
//     const { currentUser } = this.state;
//     return (
//       <div className="App">
//         <Header logOut={this.logOut} currentUser={currentUser} />
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route
//             exact
//             path="/examinations"
//             render={() => <Examinations currentUser={currentUser} />}
//           />
//           <Route
//             path="/sign-up-sign-in"
//             render={(props) => (
//               <SingInSignUp
//                 currentUser={currentUser}
//                 signinUser={this.signinUser}
//                 {...props}
//               />
//             )}
//           />
//           <Route path="/createExamination" component={CreateExamination} />
//           <Route path="/myprofile" component={MyProfile} />
//           <Signin currentUser={currentUser} />
//         </Switch>
//         {/* <Footer /> */}
//       </div>
//     );
//   }
// }

// export default App;
