import React from 'react';
import Jumbotron from "../Elements/Jumbotron";
import Articles from "../Elements/Articles"

const Home = () => (
  <div>
    <Jumbotron />
    <div className="row">
      <Articles />
      <Articles />
    </div>
  </div>

);

export default Home;