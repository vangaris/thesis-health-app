import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import "./sign-in.style.scss";
import CustomButton from "../../components/custom-button/custom-button.component";
import { login } from "../../database/utils";
import { withRouter } from "react-router-dom";

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      token: "",
      user: this.props.currentUser,
    };
  }

  componentWillReceiveProps({ currentUser }) {
    this.setState({ user: currentUser });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const url = "http://localhost:3000/users/login";

    const accesToken = await login(url, this.state);

    if (accesToken) {
      this.setState(
        {
          email: this.state.email,
          password: this.state.password,
          token: accesToken,
        },
        () => {
          console.log(this.state);
        }
      );

      localStorage.setItem("token", this.state.token);
      this.props.history.push("/");
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { signin } = this.props;

    return (
      <div className="sign-in">
        <h2> I already have an account</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label={"Εmail"}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label={"Password"}
            required
          />
          <div className="buttons">
            <CustomButton
              onClick={() => {
                signin();
              }}
              type="submit"
            >
              {" "}
              Sign in{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Signin);
