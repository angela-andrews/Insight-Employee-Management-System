import React from 'react'

class Thankyou extends React.Component {
  state = { 
    imageStatus: "loading" 
  };

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
    const timeout = 5 * 1000;
    setTimeout(this.redirectLocation(), timeout)
  };

  redirectLocation() {
    return "window.location='/'"
  }
  render() {
    return (<>
      <div className="carousel slide d-flex" data-ride="carousel">
        <div className="jumbotron-info d-flex flex-column w-50 justify-content-center">
          <h1 className="thankyou">Thank you for using <span className="insight-name">Insight</span>.</h1>
          <p className="thankyou-subtitle">You've successfully signed out</p>
        </div>
        <div className="carousel-inner mx-auto">
          <div className="carousel-item active">
            <img className="d-block w-100" 
              src="/images/signout.jpg" 
              onLoad={() => this.handleImageLoaded()}
              alt="Woman Closing Laptop "
              data-attr={this.state.imageStatus}
            />   
          </div>
        </div>
      </div> 
    </>);
  };
};

export default Thankyou;