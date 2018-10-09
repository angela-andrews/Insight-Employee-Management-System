import React from 'react';

const Navbar = ({ imageSrc, imageAlt, navLinks, signIn }) => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="/">
      <img className="logo-name" alt={imageAlt} src={imageSrc} />
    </a>
    <button 
      className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" 
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        {navLinks.map(link => {
          return (<li className="nav-item">
          <a className="nav-link" href={"/"+link}>{link.charAt(0).toUpperCase() + link.substr(1)}</a>
        </li>)
        })}
      </ul>
    </div>
  </nav>
);

export default Navbar;