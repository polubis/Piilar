import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";

import Home from "pages/home";
import About from "pages/about";
import Login from "pages/login";
import Register from "pages/register";

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/about">To About</Link>
        <Link to="/">Home</Link>
        <Link to="/dsadd">NOt found</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route render={() => <div>Not found page</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
