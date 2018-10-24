import React, { Component } from "react";
import Jumbotron from "../Elements/Jumbotron";
import Navbar from "../Elements/Navbar";
import Footer from "../Elements/Footer";

class Home extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated()){
      this.props.history.replace("/signin")
    };
  };

  render() {
    return (
      <>
        <Navbar
          imageSrc={"images/insight_name_tr.png"}
          imageAlt={"insight Logo"}
          navLinks={["signin"]}
          auth={this.props.auth}
        />
        <Jumbotron />
        <div className="articles d-flex justify-content-between">
          <div className="article-div d-flex flex-column justify-content-center">
            <i className="far fa-thumbs-up article-icon"></i>
            <h5>Easy to use</h5>
            <p>No training needed. You can quickly learn how to use our service.</p>
          </div>

          <div className="article-div d-flex flex-column justify-content-center">
            <i className="far fa-comments article-icon"></i>
            <h5>Support</h5>
            <p>Our Customer Care Team is alwasy ready and happy to assist you.</p>
          </div>
      
          <div className="article-div d-flex flex-column justify-content-center">
            <i className="far fa-smile-wink article-icon"></i>
            <h5>Free</h5>
            <p>No cost to your company! That will surely put a smile on your face.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  };
};

export default Home;