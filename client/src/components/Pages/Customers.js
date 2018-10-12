import React from 'react';
import Navbar from '../Elements/Navbar';
import Menu2 from "../Pages/Menu2";
import Sidebar from "../Elements/Sidebar";

const Customers = () => (
  <div>
    <Navbar
      imageSrc={"images/insight_name_tr.png"}
      imageAlt={"Incite Logo"}
      navLinks={["products", "customers", "company", "signin"]}
      signIn={true}
    />
    <div className="d-flex align-items-start">
      <Sidebar />
      <Menu2 />
    <h1>In the Customers Route</h1>
    </div>
  </div>
);

export default Customers;