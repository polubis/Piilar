import React from "react";
import { Helmet } from "react-helmet-async";

import "./Home.scss";

class Home extends React.Component {
  state = {
    counter: 0
  };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  head = () => {
    return (
      <Helmet>
        <title>Home page</title>
      </Helmet>
    );
  };

  render() {
    return (
      <div>
        {this.head()}
        {this.state.counter}
        <button className="button" onClick={this.incrementCounter}>
          <span>Increment</span>
        </button>
      </div>
    );
  }
}

export default Home;
