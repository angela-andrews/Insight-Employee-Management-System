import React from 'react';
import Navbar from '../Elements/Navbar';

const Company = () => (
  <div>
    <Navbar
      imageSrc={"images/insight_name_tr.png"}
      imageAlt={"Incite Logo"}
      navLinks={["products", "customers", "company", "signin"]}
      signIn={true}
    />
    <hr />
    <h1>In the Company Route</h1>
  </div>
);

export default Company;