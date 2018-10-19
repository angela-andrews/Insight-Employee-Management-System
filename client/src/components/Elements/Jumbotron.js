import React from "react";

const Jumbotron = () => (
  <div className="carousel slide d-flex" data-ride="carousel">
    <div className="jumbotron-info d-flex flex-column w-50 justify-content-center">
      <p className="jumbotron-subtitle">GET INSIGHT TODAY</p>
      <h1>Success is a choice.</h1>
      <p className="jumbotron-content">Understanding what makes a company successful can be frustating and 
      costly. insight helps you communicate your company's goals and expectations in a clear and effective
      manner.</p>
    </div>
    <div className="carousel-inner mx-auto">
      <div className="carousel-item active">
        <img className="d-block w-100" src="/images/carousel1.jpg" alt="First slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="/images/carousel2.jpg" alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="/images/carousel3.jpg" alt="Third slide"/>
      </div>
    </div>
  </div>
);

export default Jumbotron;