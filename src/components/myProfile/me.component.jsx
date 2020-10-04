import React, { useState, useEffect } from "react";
import { userProfile } from "../../database/utils";
import moment from "moment/moment";
import "./me.style.scss";
import Header from "../header/header.components";

const Me = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    userProfile().then((response) => setCurrentUser(response.data));
  }, []);

  return (
    <>
      <Header />
      {currentUser && (
        <div className="containerProfile">
          <div className="profile">
            <h4> Ο λογαριασμός μου: </h4>
            <div className="items">
              <span className="name"> Όνομα: {currentUser.name} </span>
              <span className="phone"> Κινητό: {currentUser.phone} </span>
              <span className="email"> Email: {currentUser.email} </span>
              <span className="createdDate">
                {" "}
                Ημερομηνία δημιουργία:{" "}
                {moment(currentUser.createdAt).format("LLLL")}{" "}
              </span>
              <span className="updatedDate">
                {" "}
                Τελευταία Τροποίηση:{" "}
                {moment(currentUser.updatedAt).format("LLLL")}{" "}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Me;
