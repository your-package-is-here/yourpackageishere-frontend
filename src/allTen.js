import React, { Component, Fragment } from "react";
import api from './helpers/environment.js';

class AllTen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allTen: []
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
        this.setState({allTen: tenants});
      })
      .catch(err => console.error(err));
  }

  componentDidMount = () => {
    this.loadAllTenants();
  }

  render() {
    return (
      <Fragment>

      </Fragment>
    )
  }
}

  export default AllTen;
