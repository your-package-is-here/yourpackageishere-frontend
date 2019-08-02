import React, { Component } from 'react';
import api from './helpers/environment.js';
import { Redirect } from 'react-router-dom';

class EditTenant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      aptnum: '',
      phonenum: '',
      id: '',
      successRedirect: false,
    }
    this.api = api();
    this.id = this.props.match.params.id;
  }
  
  componentDidMount = () => {
    return fetch(`${this.api}/api/tenant/${this.id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      return response.json();
    })
    .then(tenants => {
      this.setState({ ...tenants });
    })
    .catch(err => console.error(err));
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
    
    return fetch(`${this.api}/api/tenant/${this.id}/edit`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
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
      return <Redirect to="/all-Tenants" />;
    }
    return (
      <div class="tenantEdit mt">
        <h3 class="text-center">Edit Tenant</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstname">First Name</label>
              <input name="firstname" id="firstname" className="form-control" value={this.state.firstname} onChange={this.handleInputChange} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lastname">Last Name</label>
              <input type="lastname" name="lastname" id="lastname" className="form-control" value={this.state.lastname} onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" className="form-control" value={this.state.email} onChange={this.handleInputChange} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="aptnum">Apartment Number</label>
              <input name="aptnum" id="aptnum" className="form-control" value={this.state.aptnum} onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="phonenum">Phone Number</label>
              <input name="phonenum" id="phonenum" className="form-control" value={this.state.phonenum}onChange={this.handleInputChange} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Edit</button>
        </form>
      </div>
    )
  }
}

export default EditTenant;