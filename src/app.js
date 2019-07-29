import React, { Component, Fragment } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Home from './home.js';
import Register from './register.js';
import Login from './login.js';
import About from './about.js';
import api from './helpers/environment.js';

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

  componentDidMount = () => {
    this.loadCurrentUser();
  }

  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" 
            component={About} 
            isAuthenticated={this.state.isAuthenticated} 
          />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(App);
