import React from 'react';

const Navbar = ({ imageSrc, imageAlt, navLinks, signIn, userName }) => (
  <nav className="navbar navbar-expand-lg navbar-light">
      {signIn ? '' :
         <div className="d-flex align-items-end">
           <span className="span-powered">powered by </span>
           <img className="logo-sm" alt="insight logo small" src="/images/insight_logo_tr.png" />
         </div>
      }
    <button 
      className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" 
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
      <li className="nav-link"><b>{signIn ? '' : `Hello ${userName}`}</b></li>
        {navLinks.map((link, index) => {
          return (<li key={index} className="nav-item">
          <a className="nav-link nav-link-top" href={"/"+link}>{link.charAt(0).toUpperCase() + link.substr(1)}</a>
        </li>)
        })}
      </ul>
    </div>
  </nav>
);

export default Navbar;