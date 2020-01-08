import React from "react";

class Home extends React.Component {
  state = {
    counter: 0
  };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        {this.state.counter}
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

export default Home;
