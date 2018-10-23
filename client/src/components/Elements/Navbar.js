import React from 'react';
import {
  withRouter
 } from 'react-router-dom'

const handleClick = (auth, props) => {
  if (auth.isAuthenticated()) {
    auth.logout(props)
  } else {
    auth.login(props)
  }
} 

const Navbar = ({ imageSrc, imageAlt, navLinks, auth, userName, ...rest }) => {
  const { isAuthenticated } = auth;
  return (
  <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand d-flex" href="/">	
        <img className="logo-name" alt={imageAlt} src={imageSrc} />
      {isAuthenticated() ? '' :
         <div className="d-flex align-items-center">
           <span className="span-powered">powered by </span>
           <img className="logo-sm" alt="insight logo small" src="/images/insight_logo_tr.png" />
         </div>
      }
      </a>
    <button 
      className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" 
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-link"><b>{!isAuthenticated() ? '' : `Hello ${userName}`}</b></li>
        <li className="nav-item">
            <span className="nav-link nav-link-top" onClick={() => handleClick(auth, rest)} >
              {!isAuthenticated() ? "Sign In"  : "Sign Out"}
            </span>
        </li>
      </ul>
    </div>
  </nav>
  )
};

export default withRouter (Navbar);