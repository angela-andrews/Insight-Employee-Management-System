import React from 'react';
import Jumbotron from "../Elements/Jumbotron";
import Articles from "../Elements/Articles"
import Navbar from "../Elements/Navbar";

const Home = () => (
  <div>
    <Navbar
      imageSrc={"images/insight_name_tr.png"}
      imageAlt={"Incite Logo"}
      navLinks={["products", "customers", "company", "signin"]}
      signIn={true}
    />
    <Jumbotron />
    <div className="row">
      <Articles />
      <Articles />
    </div>
  </div>

);

export default Home;