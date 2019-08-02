import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import api from './helpers/environment.js';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameOrEmail: '',
      password: '',
      successRedirect: false
    }
    this.api = api();
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
    event.preventDefault();

    return fetch(`${this.api}/api/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        else {
          console.log('error');
        }
      })
      .then(data => {
        localStorage.setItem('token', data.accessToken);
        this.props.onLogin();
        this.setState({successRedirect: true});
      })
      .catch(err => console.error());
  }

  render() {
    if (this.state.successRedirect === true) {
      return <Redirect to="/" />;
    }

    return (
      <Fragment>
        <div class="container mt" id="login">
          <form className="form-signin" onSubmit={this.handleFormSubmit}>
            <i className="fas fa-parachute-box mb-4"></i>
            <h3 className="text-center">Please log in</h3>
            <div className="form-row login-input">
              <label htmlFor="usernameOrEmail">Username:</label>
              <input name="usernameOrEmail" id="usernameOrEmail" className="form-control" required onChange={this.handleInputChange} />
            </div>
            <div className="form-row login-input">
              <label htmlFor="password">Password:</label>
              <input name="password" id="password" className="form-control" type="password" required onChange={this.handleInputChange} />
            </div>
            <button type="submit" id="login-btn" className="btn btn-primary btn-lg btn-block">Login</button>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default Login;
