import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import api from './helpers/environment.js';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      buildingName: '',
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
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

    return fetch(`${this.api}/api/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        if (response.ok) {
          this.setState({ successRedirect: true });
        }
        else {
          console.log(response.json());
        }
      })
      .catch(err => console.error());
  }

  render() {
    if (this.state.successRedirect === true) {
      return <Redirect to="/login" />;
    }

    return (
      <Fragment>
        <div class="container mt" id="register">
          <h3 className="text-center">Register Account</h3>

          <form onSubmit={this.handleFormSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="username">Username</label>
                <input name="username" id="username" className="form-control" onChange={this.handleInputChange} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" className="form-control" onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="form-control" onChange={this.handleInputChange} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="name">Building Name</label>
                <input name="name" id="name" className="form-control" onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="streetaddress">Street Address</label>
              <input name="streetaddress" id="streetaddress" className="form-control" onChange={this.handleInputChange} />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="city">City</label>
                <input name="city" id="city" className="form-control" onChange={this.handleInputChange} />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="state">State</label>
                <input name="state" id="state" className="form-control" onChange={this.handleInputChange} />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="zip">Zip Code</label>
                <input name="zip" id="zip" className="form-control" onChange={this.handleInputChange} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default Register;
