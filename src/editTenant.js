import React, { Component } from 'react';
import api from './helpers/environment.js';

class EditTenant extends Component {
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
  
  componentDidMount = () => {
    console.log(this.props.match.params.id);
    return fetch(`${this.api}/api/tenant/${this.props.match.params.id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => {
      return response.json();
    })
    .then(tenants => {
      console.log(tenants);
      this.setState({firstname: tenants.firstname});
      this.setState({lastname: tenants.lastname});
      this.setState({email: tenants.email});
      this.setState({aptnum: tenants.aptnum});
      this.setState({phonenum: tenants.phonenum});
    })
    .catch(err => console.error(err));
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor={this.firstname}>first name</label>
            <input name="firstname" id="firstname" className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastname">lastname</label>
            <input type="lastname" name="lastname" id="lastname" className="form-control" onChange={this.handleInputChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="form-control" onChange={this.handleInputChange} />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="aptnum">aptnum</label>
            <input name="aptnum" id="aptnum" className="form-control" onChange={this.handleInputChange} />
          </div>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="phonenum">Phonenum</label>
          <input name="phonenum" id="phonenum" className="form-control" onChange={this.handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    )
  }
}

export default EditTenant;