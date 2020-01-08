import React from "react";
import { Helmet } from "react-helmet-async";

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
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default Home;
