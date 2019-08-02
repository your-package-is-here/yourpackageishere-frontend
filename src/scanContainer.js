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

  handleQRScan = (result) => {
    if (result) {
      this.addToScanResult(result);
    } else {
      this.setState({scanStatus: 'fail'});
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

  render() {
    const scans = this.state.scanResult;

    return (
      <Fragment>
        <div className="container" id="scan-package">
          <h3>Scan</h3>
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
          <h3>Send</h3>
          {scans.length > 0 ?
            scans.map(scan => 
              <SingleScanResult 
                key={scan.trackingNumber} 
                scan={scan}
              />
            ) :
            null
          }
        </div>
      </Fragment>
    )
  }
}

export default ScanContainer;
