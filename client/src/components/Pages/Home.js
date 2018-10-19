import React from 'react';
import Jumbotron from "../Elements/Jumbotron";
import Navbar from "../Elements/Navbar";
import Footer from "../Elements/Footer";

const Home = () => (
  <div>
    <Navbar
      imageSrc={"images/insight_name_tr.png"}
      imageAlt={"insight Logo"}
      navLinks={["products", "customers", "company", "signin"]}
      signIn={true}
    />
    <Jumbotron />
  
    <div className="row">
      <div className="article-div col-sm-6 d-flex justify-content-center">
        <img className="article" src="/images/articles.png" alt="article"/>
      </div>
      <div className="article-div col-sm-6 d-flex justify-content-center">
        <img className="article" src="/images/articles.png" alt="article"/>
      </div>
    </div>
  
    <Footer />
  </div>
);

export default Home;