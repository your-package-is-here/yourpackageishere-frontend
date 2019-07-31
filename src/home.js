import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
  <div id="landing-page">
    <div className="container" id="landing-content">
      <h2>Welcome to YourPackageIsHere</h2>
      <p>Making deliveries that much <span className="special">easier</span>.</p>

      {/* If not logged in: */}
      <span>
        <p>Join <span className="special">now</span> to start using!</p>
        <Link className="btn btn-dark btn-xl" to="/register">Sign up</Link>
        <Link className="btn btn-dark btn-xl" to="/login">Login</Link>
        <Link className="btn btn-dark btn-xl" to="/about">About</Link>
        <Link className="btn btn-dark btn-xl" to="/allTen">All Tenants</Link>
      </span>

  </div>
</div >
);

export default home;
