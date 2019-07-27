import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import api from './helpers/environment.js';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      successRedirect: false
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    this.setState({
      [inputName]: inputValue
    });
  }

  handleFormSubmit = (event) => {
    
  }

  render() {
    return (
      <Fragment>
        <form className="form-signin" onSubmit={}>
          <i className="fas fa-parachute-box mb-4"></i>
          <h3 className="text-center">Please log in</h3>
          <div className="form-row login-input">
            <label htmlFor="username">Username:</label>
            <input name="username" id="username" className="form-control" required />
          </div>
          <div className="form-row login-input">
            <label htmlFor="password">Password:</label>
            <input name="password" id="password" className="form-control" type="password" required />
          </div>
          <button type="submit" id="login-btn" className="btn btn-primary btn-lg btn-block">Login</button>
        </form>
      </Fragment>
    )
  }
}