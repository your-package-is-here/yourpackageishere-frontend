import React, { Component, Fragment } from 'react';

class Register extends Component {

  render() {
    return (
      <Fragment>
        <h3 className="text-center">Register Account</h3>

        <form method="POST" action="/buildingcreate">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="username">Username</label>
              <input name="username" id="username" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" className="form-control" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="name">Building Name</label>
              <input name="name" id="name" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="streetaddress">Street Address</label>
            <input name="streetaddress" id="streetaddress" className="form-control" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="city">City</label>
              <input name="city" id="city" className="form-control" />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="state">State</label>
              <input name="state" id="state" className="form-control" />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="zip">Zip Code</label>
              <input name="zip" id="zip" className="form-control" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Register </button>
        </form>
      </Fragment>
    )
  }
}

export default Register;
