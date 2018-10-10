import React from 'react';
import Navbar from '../Elements/Navbar';

const Products = () => (
  <div>
    <Navbar
      imageSrc={"images/insight_name_tr.png"}
      imageAlt={"Incite Logo"}
      navLinks={["products", "customers", "company", "signin"]}
      signIn={true}
    />
    <hr />
    <h1>In the Products Route</h1>
  </div>

);

export default Products;