import React, { Fragment } from 'react';

export default (props) => {

  return (
    <Fragment>
      <h3 class="text-center">Register Account</h3>

      <form method="POST" action="/buildingcreate">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="username">Username</label>
            <input name="username" id="username" class="form-control" />
          </div>
          <div class="form-group col-md-6">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" class="form-control" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" class="form-control" />
          </div>
          <div class="form-group col-md-6">
            <label for="name">Building Name</label>
            <input name="name" id="name" class="form-control" />
          </div>
        </div>
        <div class="form-group">
          <label for="streetaddress">Street Address</label>
          <input name="streetaddress" id="streetaddress" class="form-control" />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="city">City</label>
            <input name="city" id="city" class="form-control" />
          </div>
          <div class="form-group col-md-4">
            <label for="state">State</label>
            <input name="state" id="state" class="form-control" />
          </div>
          <div class="form-group col-md-2">
            <label for="zip">Zip Code</label>
            <input name="zip" id="zip" class="form-control" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Register </button>
      </form>
    </Fragment>
  )
}