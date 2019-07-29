import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

export default (props) => {
  if (props.isAuthenticated === false) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      What up?
    </Fragment>
  )
}
