import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Home from './home.js';
import Register from './register.js';
import Login from './login.js';
import About from './about.js';
import ScanContainer from './scanContainer';

import api from './helpers/environment.js';
import { PrivateRoute } from './helpers/privateRoute.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      isAuthenticated: false
    }
    this.api = api();
  }

  loadCurrentUser = () => {
    if (!localStorage.getItem('token')) {
      console.log('No token present.');
    }

    else {
      return fetch(`${this.api}/api/user/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(response => {
          return response.json();
        })
        .then(user => {
          this.setState({currentUser: user, isAuthenticated: true});
        })
        .catch(err => console.error());
    }
  }

  handleLogin = () => {
    this.loadCurrentUser();
  }

  componentDidMount = () => {
    this.loadCurrentUser();
  }

  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login"
            render={(props) => <Login onLogin={this.handleLogin} {...props} />}
          />
          <PrivateRoute exact path="/about" 
            isAuthenticated={this.state.isAuthenticated} 
            component={About} 
          />
          <PrivateRoute exact path="/scan-package"
            isAuthenticated={this.state.isAuthenticated}
            component={ScanContainer}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
