import React, { Component, Fragment } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Home from './home.js';
import Register from './register.js';
import Login from './login.js';

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
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
