import React, { Component, Fragment } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Home from './home.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      isAuthenticated: false
    }
  }

  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
