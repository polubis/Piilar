import React from "react";
import { Helmet } from "react-helmet-async";

import "./Login.scss";

class Login extends React.Component<any> {
  state = {
    counter: 0
  };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  head = () => {
    return (
      <Helmet>
        <title>Login page</title>
      </Helmet>
    );
  };

  render() {
    return (
      <div>
        {this.head()}
        Login
      </div>
    );
  }
}

export default Login;
