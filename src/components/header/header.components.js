import React, { useState, useEffect } from "react";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/stethoscope.svg";
import { userProfile } from "../../database/utils";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    userProfile().then((response) => setCurrentUser(response.data));
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/examinations">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="options">
        <div className="option">
          <Link to="/examinations">Οι εξετάσεις μου</Link>
        </div>

        <div className="option">
          <Link to="/add">Προσθήκη</Link>
        </div>
      </div>
      <div className="userInfo">
        <div className="name">
          <Link to="/me">{currentUser && currentUser.name}</Link>{" "}
        </div>
        <div
          className="signin-logout"
          onClick={() => {
            history.push("/");
            localStorage.removeItem("token");
          }}
        >
          Εξοδος
        </div>
      </div>
    </div>
  );
};

export default Header;
