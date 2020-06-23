import React, { useContext } from "react";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/stethoscope.svg";

import { Link } from "react-router-dom";

import { currentUserContext } from "../../App";

function Header() {
  const currentUser = useContext(currentUserContext);
  console.log(currentUser);
  
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>

      <div className="options">
        {currentUser.state.loggin ? (
          <div className="option">
            <Link to="/examinations">Οι εξετάσεις μου</Link>
          </div>
        ) : null}
        {currentUser.state.loggin ? (
          <div className="option">
            <Link to="/createExamination">Προσθήκη</Link>
          </div>
        ) : null}
      </div>
      <div className="userInfo">
        {currentUser.state.loggin? (
          <div className="name">
            <Link to="/myprofile">{currentUser.state.currentUser.name}</Link>{" "}
          </div>
        ) : null}
        {currentUser.state.loggin? (
          <div
            className="signin-logout"
            onClick={() => currentUser.userDispatch({ type: "LOGOUT", value: {} })}
          >
            Εξοδος
          </div>
        ) : (
          <div className="signin-logout">
            <Link to="/sign-up-sign-in">Είσοδος</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
