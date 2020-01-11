import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App;