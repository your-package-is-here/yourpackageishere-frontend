import React, { Fragment } from 'react';

export default (props) => {

  const messageOptions = {
    success: {
      header: "Success!",
      body: "Added to queue."
    },
    fail: {
      header: "Error!",
      body: "Please try again."
    }
  }

  if (props.status === 'success') {
    return (
      <Fragment>
        <h2>{messageOptions.success.header}</h2>
        <p>{messageOptions.success.body}</p>
      </Fragment>
    )
  }

  if (props.status === 'fail') {
    return (
      <Fragment>
        <h2>{messageOptions.fail.header}</h2>
        <p>{messageOptions.fail.body}</p>
      </Fragment>
    )
  }
}