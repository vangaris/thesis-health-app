import React from "react";
import "./sign-in-sing-up-page.style.scss";
import Singin from "../../components/sign-in/sign-in.component";
import SingUp from "../../components/sing-up/sing-up.compnent";

class SignInAndSingUpPage extends React.Component {
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
    const { signinUser } = this.props;
    return (
      <div className="sing-in-sign-up-page">
        <button
          onClick={() => {
            signinUser();
          }}
        >
          test
        </button>
        <SingUp />
        <Singin signin={signinUser} />
      </div>
    );
  }
}

export default SignInAndSingUpPage;
