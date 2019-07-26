import React from 'react';

const home = () => (
  <div id="landing-page">
    <div className="container" id="landing-content">
      <h2>Welcome to YourPackageIsHere</h2>
      <p>Making deliveries that much <span className="special">easier</span>.</p>

      {/* If not logged in: */}
      <span>
        <p>Join <span className="special">now</span> to start using!</p>
        <a className="btn btn-dark btn-xl" href="/register">Sign up</a>
        <a className="btn btn-dark btn-xl" href="/login">Login</a>
      </span>

  </div>
</div >
);

export default home;
