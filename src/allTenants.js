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
        <div class="container mt" id="all-tenants">
          <h3 class="text-center">Tenants</h3>
          <table class="table">
          <thead>
            <tr>
              <th scope="col">Apt. #</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
            <tbody>
                {tenants.map(tenant => (
                  <SingleTenant 
                    tenant={tenant} 
                    handleDeleteUpdate={this.handleDeleteUpdate}
                    key={tenant.id} 
                  />
                ))}
            </tbody>
          <Link class="btn btn-primary" to="/add-tenant">Add Tenant</Link>
          </table>
        </div>
      </Fragment>
    )
  }
}

  export default AllTen;
