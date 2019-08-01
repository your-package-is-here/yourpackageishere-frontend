import React, { Component, Fragment } from 'react';
import Scanner from './scanner.js';
import ScanMessage from './scanMessage.js';
import SingleScanResult from './singleScanResult.js';

class ScanContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scanResult: [],
      scanStatus: ''
    }
  }

  addToScanResult = (result) => {
    const scans = this.state.scanResult;
    const thisResult = JSON.parse(result);

    if (scans.length > 0) {
      let check = false;
      scans.forEach(scan => {
        if (scan.trackingNumber === thisResult.trackingNumber) {
          check = true;
        }
      })
      if (check === true) { return; }
    }

    this.setState({
      scanResult: [...this.state.scanResult, JSON.parse(result)],
      scanStatus: 'success'
    });
  }

  handleQRScan = (result) => {
    if (result) {
      this.addToScanResult(result);
    } else {
      this.setState({scanStatus: 'fail'});
    }
  }

  render() {
    const scans = this.state.scanResult;

    return (
      <Fragment>
        <div className="container" id="scan-package">
          <h2>Scan</h2>
          <div className="row">
            <div className="col">
              <Scanner handleQRScan={this.handleQRScan} />
            </div>
            <div className="col">
              {scans.length > 0 ?
                <ScanMessage status={this.state.scanStatus} /> :
                null
              }
            </div>
          </div>
          <hr />
          <h2>Send</h2>
          <div className="row">
            {scans.length > 0 ?
              scans.map(scan => 
                <SingleScanResult key={scan.trackingNumber} scan={scan} />
              ) :
              null
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ScanContainer;
