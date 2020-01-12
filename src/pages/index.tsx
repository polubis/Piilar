import React from "react";

import { Route, Switch } from "react-router";

import About from "pages/about/About";
import Home from "pages/home/Home";
import Login from "pages/login/Login";
import Register from "pages/register/Register";

const PagesRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route render={() => <div>Not found page</div>} />
    </Switch>
  );
};

export default PagesRouter;
