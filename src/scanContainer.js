import React, { Component, Fragment } from 'react';
import Scanner from './scanner.js';

import ScanMessage from './scanMessage.js';

class ScanContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scanResult: '',
      scanStatus: ''
    }
  }

  handleQRScan = (result) => {
    if (result) {
      this.setState({
        scanResult: result,
        scanStatus: 'success'
      });
    } else {
      this.setState({scanStatus: 'fail'});
    }
  }

  render() {
    return (
      <Fragment>
        <Scanner handleQRScan={this.handleQRScan} />
        {this.state.scanResult ?
          <ScanMessage status={this.state.scanStatus} /> :
          null
        }
      </Fragment>
    )
  }
}

export default ScanContainer;
