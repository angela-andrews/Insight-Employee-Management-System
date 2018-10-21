import React from 'react'


class Thankyou extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: "loading" };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
    const seconds = 5;
    const url ="/";
  setTimeout("window.location='"+url+"'"
  ,seconds*1000)
  }

  render() {
    return (
      <>
      <div className="carousel slide d-flex" data-ride="carousel">
        <div className="jumbotron-info d-flex flex-column w-50 justify-content-center">
          <h1 className="thankyou">Thank you for using <span className="insight-name">Insight</span>.</h1>
          <p className="thankyou-subtitle">You've successfully signed out</p>
        </div>
        <div className="carousel-inner mx-auto">
          <div className="carousel-item active">
            <img className="d-block w-100" 
                 src="/images/signout.jpg" 
                 onLoad={this.handleImageLoaded.bind(this)}
                 alt="Woman Closing Laptop "
                 data-attr={this.state.imageStatus}
              />
              
          </div>
        </div>
      </div> 
      </>
    );
  }
}



export default Thankyou;
