import React from 'react';
import { Link } from 'react-router-dom';

const home = (props) => (
  <div id="landing-page">
    <div className="container" id="landing-content">
      <h2>Welcome to YourPackageIsHere</h2>
      <p>Making deliveries that much <span className="special">easier</span>.</p>
      
      {props.isAuthenticated ? 
        (
          <div>
            <Link class="btn btn-primary" to="/about">About</Link>
            <Link class="btn btn-primary" to="/all-tenants">All Tenants</Link>
            <Link class="btn btn-primary" to="/add-tenant">Add Tenants</Link>
          </div>
        ) : 
        (
          <span>
            <p>Join <span className="special">now</span> to start using!</p>
            <div>
              <Link class="btn btn-primary" to="/register">Sign up</Link>
              <Link class="btn btn-primary" to="/login">Login</Link>
              <Link class="btn btn-primary" to="/about">About</Link>
            </div>
          </span>
        )
      }
  </div>
</div >
);

export default home;
