import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const home = (props) => (
  <div id="landing-page">
    <div className="container" id="landing-content">
      <h2>Welcome to YourPackageIsHere</h2>
      <p>Making deliveries that much <span className="special">easier</span>.</p>
      {!props.isAuthenticated ? 
        (
          <Fragment>
            <Link className="btn btn-dark" to="/register">Sign up</Link>
            <Link className="btn btn-primary" to="/login">Login</Link>
          </Fragment>
        ) :
        null
      }
  </div>
</div >
);

export default home;
