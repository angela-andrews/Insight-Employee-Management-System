import React from 'react';
import Navbar from '../Elements/Navbar';

const fetchData = () => {
  fetch('/graphql', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ query:
      `{
        allEmployees {
          firstName
          lastName
          homeZip
        }
      }`
    }),
  })
  .then(res => res.json())
  .then(res => console.log(res.data));
};

const Customers = () => {
  fetchData()
  return(
  <div>
    <Navbar
      imageSrc={"images/insight_name_tr.png"}
      imageAlt={"Incite Logo"}
      navLinks={["products", "customers", "company", "signin"]}
      signIn={true}
    />
    <h1>In the Customers Route</h1>
  </div>
  )
};

export default Customers;