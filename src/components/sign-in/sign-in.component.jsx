import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom'

import "./sign-in.style.scss";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import { login } from "../../database/utils";
import { currentUserContext } from "../../App";

function Signin() {
  const currentUser = useContext(currentUserContext);
  const history = useHistory()

  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:3000/users/login";

    login(url, { email, password }).then((data) => {
      currentUser.userDispatch({ type: "LOGIN", value: {name: data.user.name, token: data.token}});
      localStorage.setItem("currentUser", data);
    }).catch(err => alert(err))
    history.push("/");
  };

  return (
    <div className="sign-in">
      <h2> I already have an account</h2>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={(event) => setUsername(event.target.value)}
          label={"Εmail"}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={(event) => setPassword(event.target.value)}
          label={"Password"}
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default Signin;
