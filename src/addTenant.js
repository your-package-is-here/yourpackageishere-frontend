import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import api from './helpers/environment.js';

class AddTen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      aptnum: '',
      phonenum: '',
      successRedirect: false,
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

    return fetch(`${this.api}/api/tenant/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        if (response.ok) {
          this.setState({ successRedirect: true });
        } else {
          console.log('error');
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.successRedirect === true) {
      return <Redirect to="/all-tenants" />;
    }
    return (
      <div className="container mt">
        <div className="tenantCreate mt" id="tenant-create">
          <h3 className="text-center">Add Tenant</h3>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstname">First Name</label>
                <input name="firstname" id="firstname" className="form-control" onChange={this.handleInputChange} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastname">Last Name</label>
                <input type="lastname" name="lastname" id="lastname" className="form-control" onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="form-control" onChange={this.handleInputChange} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="aptnum">Apartment Number</label>
                <input name="aptnum" id="aptnum" className="form-control" onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="phonenum">Phone Number</label>
                <input name="phonenum" id="phonenum" className="form-control" onChange={this.handleInputChange} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddTen;
