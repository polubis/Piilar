import React from "react";
import { Helmet } from "react-helmet-async";

import "./About.scss";

class About extends React.Component<any> {
  state = {
    counter: 0
  };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  head = () => {
    return (
      <Helmet>
        <title>About page</title>
      </Helmet>
    );
  };

  render() {
    return (
      <div>
        {this.head()}
        About
      </div>
    );
  }
}

export default About;
