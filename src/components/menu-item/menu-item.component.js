import React from "react";
import "./menu-item.style.scss";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className="container">
    <div className="menu-item">
      <div className="content">
        <Link className="title" to="/examinations">
          {" "}
          Examinations{" "}
        </Link>
      </div>
    </div>
    <div className="menu-item">
      <div className="content">
        <Link className="title" to="/sign-up-sign-in">
          {" "}
          Sign in{" "}
        </Link>
      </div>
    </div>
  </div>
);
export default MenuItem;
