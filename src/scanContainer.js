import React, { Component, Fragment } from 'react';
import Scanner from './scanner.js';


class ScanContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scanResult: ''
    }
  }

  handleQRScan = (result) => {
    this.setState({scanResult: result});
  }

  render() {
    return (
      <Fragment>
        <Scanner handleQRScan={this.handleQRScan} />
      </Fragment>
    )
  }
}

export default ScanContainer;
