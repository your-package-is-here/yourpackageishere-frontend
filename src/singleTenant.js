import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from './helpers/environment.js';

class SingleTenant extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

    this.api = api();
  }

  handleDeleteClick = (event) => {
    event.preventDefault();

    return fetch(`${this.api}/api/tenant/${this.state.id}/delete`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => {
        if (response.ok) {
          this.props.handleDeleteUpdate();
        }
        else {
          console.log('problem w/ delete')
        }
      })
      .catch(err => console.error(err));
  }

  componentDidMount = () => {
    this.setState({ ...this.props.tenant });
  }

  render() {
    return (
      <tr>
        <td className="tenant" id="tenant-apt">{this.state.aptnum}</td>
        <td className="tenant">{this.state.firstname} {this.state.lastname}</td>
        <td>
          <Link className="btn btn-dark" to={`/edit-tenant/${this.state.id}`}>Edit</Link>
          <button className="btn btn-danger" data-id={this.state.id} onClick={this.handleDeleteClick}>Delete</button>
        </td>
      </tr>
    )
  }
}

export default SingleTenant;