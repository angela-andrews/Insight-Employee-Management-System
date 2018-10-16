import React from 'react';
import Navbar from '../Elements/Navbar';

const Customers = () => (
  <div>
    <Navbar
      imageSrc={"images/insight_name_tr.png"}
      imageAlt={"Incite Logo"}
      navLinks={["products", "customers", "company", "signin"]}
      signIn={true}
    />
    <h1>In the Customers Route</h1>
  </div>
);

export default Customers;