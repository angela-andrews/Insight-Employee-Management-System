import React from 'react';
import Navbar from '../Elements/Navbar';
import Menu2 from "../Pages/Menu2";

const Customers = () => (
  <div>
    <Navbar
      imageSrc={"images/insight_name_tr.png"}
      imageAlt={"Incite Logo"}
      navLinks={["products", "customers", "company", "signin"]}
      signIn={true}
    />
    <hr />
    <h1>In the Customers Route</h1>
    <Menu2 />
  </div>
);

export default Customers;