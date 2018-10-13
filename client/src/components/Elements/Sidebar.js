import React from 'react';

const Sidebar = () => (
  <nav className="sidebar d-flex flex-column justify-content-between">
    <div>
      <ul className="navbar-nav ml-auto">
        <li><a href="/"><img className="logo-sidebar" alt="insight logo" src="/images/insight_logo_tr.png" /></a></li>
        <span className="divider"></span>
        <li className="nav-link"><i class="fas fa-home fa-2x"></i></li>
        <span className="divider"></span>
        <li className="nav-link"><i class="fas fa-user-tie fa-2x"></i></li>
        <span className="divider"></span>
        <li className="nav-link"><i class="fas fa-paste fa-2x"></i></li>
        <span className="divider"></span>
        <li className="nav-link"><i class="fas fa-comments fa-2x"></i></li>
        <span className="divider"></span>
        <li className="nav-link"><i class="fas fa-chart-line fa-2x"></i></li>
        <span className="divider"></span>
      </ul>
    </div>
    <div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-link"><i class="fas fa-cogs fa-2x"></i></li>
        <span className="divider"></span>
      </ul>
    </div>
  </nav>
);

export default Sidebar;