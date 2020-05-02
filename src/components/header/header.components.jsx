import React from "react";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/stethoscope.svg";

import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.currentUser,
    };
  }

  componentWillReceiveProps({ currentUser }) {
    this.setState({ ...this.state, currentUser });
  }

  render() {
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          {this.props.currentUser != null ? (
            <Link className="option" to="/examinations">
              Οι εξετάσεις μου
            </Link>
          ) : null}
          <div className="options">
            {" "}
            {this.props.currentUser != null ? (
              <Link className="option" to="/createExamination">
                Προσθήκη
              </Link>
            ) : null}
          </div>
        </div>
        <div className="userInfo">
          {this.props.currentUser != null ? (
            <Link className="name" to="/myprofile">
              {this.props.currentUser.name}
            </Link>
          ) : null}
          {this.props.currentUser != null ? (
            <div
              className="signin-logout"
              onClick={() => {
                this.props.logOut();
              }}
            >
              Εξοδος
            </div>
          ) : (
            <Link className="signin-logout" to="/sign-up-sign-in">
              Είσοδος
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
