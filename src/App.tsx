import React from "react";
import { Link } from "react-router-dom";

import PagesRouter from "pages";

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/about">To About</Link>
        <Link to="/">Home</Link>
        <Link to="/dsadd">NOt found</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      
        <PagesRouter />
      </div>
    );
  }
}

export default App;
