import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faParachuteBox } from '@fortawesome/free-solid-svg-icons'

export default (props) => {

  if (props.logout) {
    return <Redirect to="/" />;
  }

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand page-logo" to="/">
              <FontAwesomeIcon icon={faParachuteBox} />
              YourPackageIsHere
          </Link>
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
                        <Link className="dropdown-item" to="/scan-package">Scan Package</Link>
                        <Link className="dropdown-item" to="/add-tenant">Add Tenant</Link>
                        <Link className="dropdown-item" to="/all-tenants">All Tenants</Link>
                    </div>
                  </li>
                ) : 
                (
                  <Fragment>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/register">Register</Link>
                    </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                      </li>
                  </Fragment>
                )
              }

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              {props.isAuthenticated ?
                (
                  <li className="nav-item">
                    <button 
                      className="nav-link"
                      onClick={props.handleLogout}
                    >Logout</button>
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