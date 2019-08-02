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
          {/* <tr className="list-group-item" key={this.state.id}> */}
            <td className="tenant" id="tenant-apt">{this.state.aptnum}</td>
            <td className="tenant">{this.state.firstname} {this.state.lastname}</td>
            <td>
              <Link className="btn btn-primary" to={`/edit-tenant/${this.state.id}`}>Edit</Link>
              <button className="btn btn-primary" data-id={this.state.id} onClick={this.handleDeleteClick}>Delete</button>
            </td>
          {/* </tr> */}
          </tr>
    )
  }
}

export default SingleTenant;