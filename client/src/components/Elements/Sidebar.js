import React from 'react';

const Sidebar = () => (
  <nav className="sidebar d-flex flex-column justify-content-between">
    <div>
      <ul className="navbar-nav ml-auto">
        {/* <li><a href="/"><img className="logo-sidebar" alt="insight logo" src="/images/insight_logo_tr.png" /></a></li> */}
        <a href="/" className="nav-link-side">
          <li className="nav-link"><i class="fas fa-home"></i></li>
        </a>
        <a href="/" className="nav-link-side">
          <li className="nav-link"><i class="fas fa-user-tie"></i></li>
        </a>
        <a href="/" className="nav-link-side">
          <li className="nav-link"><i class="fas fa-paste"></i></li>
        </a>
        <a href="/" className="nav-link-side">
          <li className="nav-link"><i class="fas fa-comments"></i></li>
        </a>
        <a href="/" className="nav-link-side active-menu">
          <li className="nav-link"><i class="fas fa-chart-line"></i></li>
        </a>
      </ul>
    </div>
    <div>
      <ul className="navbar-nav ml-auto">
        <a href="/" className="nav-link-side"><li className="nav-link"><i class="fas fa-cogs"></i></li></a>
      </ul>
    </div>
  </nav>
);

export default Sidebar;