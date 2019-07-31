import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import api from './helpers/environment.js';
import SingleTenant from './singleTenant.js';

class AllTen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allTenants: []
    }
    this.api = api();
  }

  loadAllTenants = () => {
    return fetch(`${this.api}/api/tenant/all`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(tenants => {
        this.setState({allTenants: tenants});
      })
      .catch(err => console.error(err));
  }

  componentDidMount = () => {
    this.loadAllTenants();
  }

  handleDeleteUpdate = () => {
    this.loadAllTenants();
  }

  render() {
    const tenants = this.state.allTenants;

    return (
      <Fragment>
        <h3>Tenants</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="tenant-parent">
              <span id="tenant-header-apt">Apt. #</span>
              <span id="tenant-header-name">Name</span>
              <span id="tenant-header-action">Action</span>
            </div>
          </li>

          {tenants.map(tenant => (
            <SingleTenant 
              tenant={tenant} 
              handleDeleteUpdate={this.handleDeleteUpdate}
              key={tenant.id} 
            />
          ))}
        </ul>
        <Link to="/add-tenant">Add Tenant</Link>
      </Fragment>
    )
  }
}

  export default AllTen;
