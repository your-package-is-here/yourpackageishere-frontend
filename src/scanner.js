import React, { Component, Fragment } from 'react';
import QrReader from 'react-qr-reader';


class Scanner extends Component {

  handleScan = (data) => {
    if (data) {
      this.props.handleQRScan(data);
    }
  }

  handleError = (err) => {
    console.error(err);
  }

  render() {
    return (
      <Fragment>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '250px' }}
        />
      </Fragment>
    )
  }
}

export default Scanner;
