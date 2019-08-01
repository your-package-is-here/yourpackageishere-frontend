import React, { Component } from 'react';

class SingleScanResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trackingNumber: '',
      aptNum: '',
      firstName: '',
      lastName: ''
    }
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

  render() {

    return (
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
    )
  }
}

export default SingleScanResult;