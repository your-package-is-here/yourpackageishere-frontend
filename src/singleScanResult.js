import React, { Component, Fragment } from 'react';
import api from './helpers/environment.js';

class SingleScanResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trackingNumber: '',
      aptNum: '',
      firstName: '',
      lastName: ''
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

  componentDidMount = () => {
    this.setState({ ...this.props.scan });
  }

  handleSend = (event) => {
    event.preventDefault();

    let payload = {
      trackingnumber: this.state.trackingNumber,
      aptnum: this.state.aptNum,
      firstname: this.state.firstName,
      lastname: this.state.lastName
    };

    return fetch(`${this.api}/api/user/sendmessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(payload)
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          response: response
        });
      })
      .catch(err => console.error(err));
  }

  render() {

    let scanSendAction;

    this.state.response ?
      scanSendAction = (
        <h2>{this.state.response.message}</h2>
      ) :
      scanSendAction = <button type="button" className="btn btn-primary" onClick={this.handleSend}>Send Notification</button>
      ;

    return (
      <Fragment>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="trackingNumber">Tracking Number</label>
                    <input type="text" className="form-control" name="trackingNumber" id="trackingNumber" placeholder="Tracking Number" defaultValue={this.props.scan.trackingNumber} onChange={this.handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="aptNum">Apartment Number</label>
                    <input type="text" className="form-control" name="aptNum" id="aptNum" placeholder="Apartment Number" defaultValue={this.props.scan.aptNum} onChange={this.handleInputChange} />
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name" defaultValue={this.props.scan.firstName} onChange={this.handleInputChange} />
                    </div>
                    <div className="col">
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name" defaultValue={this.props.scan.lastName} onChange={this.handleInputChange} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col">
            {scanSendAction}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default SingleScanResult;