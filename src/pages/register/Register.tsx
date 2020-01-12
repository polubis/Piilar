import React from "react";
import { Helmet } from "react-helmet-async";

import { accountService } from "api/services";

import "./Register.scss";

class Register extends React.Component<any> {
  state = {
    counter: 0
  };

  head = () => {
    return (
      <Helmet>
        <title>Register page</title>
      </Helmet>
    );
  };

  handleSubmit = () => {
    accountService.register().then(res => {});
  };

  render() {
    return (
      <div>
        {this.head()}
        Register
      </div>
    );
  }
}

export default Register;
