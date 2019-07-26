import React from 'react';

const home = () => (
  <div id="landing-page">
    <div class="container" id="landing-content">
      <h2>Welcome to YourPackageIsHere</h2>
      <p>Making deliveries that much <span class="special">easier</span>.</p>

      {/* If not logged in: */}
      <span>
        <p>Join <span class="special">now</span> to start using!</p>
        <a class="btn btn-dark btn-xl" href="/register">Sign up</a>
        <a class="btn btn-dark btn-xl" href="/login">Login</a>
      </span>

  </div>
</div >
);

export default home;
