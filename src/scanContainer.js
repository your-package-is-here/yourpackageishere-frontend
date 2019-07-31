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
    }
  }

  render() {

    let scanStatusMessage;
    this.state.scanStatus === 'success' ?
      scanStatusMessage = <ScanMessage status={this.state.scanStatusMessage} /> :
      scanStatusMessage = null;

    return (
      <Fragment>
        <Scanner handleQRScan={this.handleQRScan} />
        {scanStatusMessage}
      </Fragment>
    )
  }
}

export default ScanContainer;
