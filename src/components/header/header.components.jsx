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
        <div className="logo-container">
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </div>

        <div className="options">
          {this.props.currentUser != null ? (
            <div className="option">
              <Link to="/examinations">Οι εξετάσεις μου</Link>
            </div>
          ) : null}
          {this.props.currentUser != null ? (
            <div className="option">
              <Link to="/createExamination">Προσθήκη</Link>
            </div>
          ) : null}
        </div>
        <div className="userInfo">
          {this.props.currentUser != null ? (
            <div className="name">
              <Link to="/myprofile">{this.props.currentUser.name}</Link>{" "}
            </div>
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
            <div className="signin-logout">
              <Link to="/sign-up-sign-in">Είσοδος</Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
