import React, { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
import "./sign-in.style.scss";
import CustomButton from "../../components/custom-button/custom-button.component";
import { login } from "../../database/utils";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleChange = (value, setState) => {
    console.log(value);
    setState(value);
  };

  return (
    <div className="sign-in">
      <FormInput
        type="email"
        name="email"
        value={email}
        onChange={({ target }) => handleChange(target.value, setEmail)}
        label={"Εmail"}
        required
      />
      <FormInput
        type="password"
        name="password"
        value={password}
        onChange={({ target }) => handleChange(target.value, setPassword)}
        label={"Password"}
        required
      />
      <div className="buttons">
        <CustomButton
          onClick={() => {
            login({ email, password })
              .then((token) => {
                localStorage.setItem("token", token);
                history.push("/examinations");
              })
              .catch((error) => {
                alert("wrong credentials");
              });
          }}
        >
          Log in
        </CustomButton>
      </div>
    </div>
  );
};

export default Login;
