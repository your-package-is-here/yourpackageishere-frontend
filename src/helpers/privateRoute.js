import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {

  if (isAuthenticated) {
    return (
      <Route {...rest} render={(props) => (
        <Component {...props} />
      )} />
    )
  } else {
    return <Redirect to='/login' />;
  }
}
