import React, { Component, Fragment } from 'react';
import Scanner from './scanner.js';
import ScanMessage from './scanMessage.js';
import SingleScanResult from './singleScanResult.js';

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
        scanResult: JSON.parse(result),
        scanStatus: 'success'
      });
    } else {
      this.setState({scanStatus: 'fail'});
    }
  }

  render() {
    return (
      <Fragment>
        <h2>Scan</h2>
        <Scanner handleQRScan={this.handleQRScan} />
        {this.state.scanResult ?
          <ScanMessage status={this.state.scanStatus} /> :
          null
        }
        <hr />
        <h2>Send</h2>
        {this.state.scanResult ?
          <SingleScanResult scan={this.state.scanResult} /> :
          null
        }
      </Fragment>
    )
  }
}

export default ScanContainer;
