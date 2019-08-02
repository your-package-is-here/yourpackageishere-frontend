import React, { Fragment } from 'react';

export default (props) => {

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand page-logo" href="/">
              <i className="fas fa-parachute-box"></i>
              YourPackageIsHere
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">

              {props.isAuthenticated ?
                (
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Building
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/sendemail">Scan Package</a>
                        <a className="dropdown-item" href="/tenant/add">Add Tenant</a>
                        <a className="dropdown-item" href="/tenant/all">All Tenants</a>
                    </div>
                  </li>
                ) : 
                (
                  <Fragment>
                    <li className="nav-item active">
                      <a className="nav-link" href="/">Home
                          <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/register">Register</a>
                    </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                      </li>
                  </Fragment>
                )
              }

              <li className="nav-item">
                <a className="nav-link" href="/aboutus">About</a>
              </li>

              {props.isAuthenticated ?
                (
                  <li className="nav-item">
                    <a className="nav-link" href="/logout">Logout</a>
                  </li>
                ) : 
                null
              }

            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}