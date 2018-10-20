import React from 'react';
import gqlFetch from '../../utils/gqlFetch';

class Certifications extends React.Component {
  state = {
    id: this.props.id
  };

  render() {
    return (
      <div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h6>Profile > Education</h6>
          <hr />
          <div>
            <h4>Universidad de Buenos Aires</h4>
            <p>Bachelor of Science BS, Biological Sciences / Laboratory Animal Science</p>
            <p>2002 - 2005</p>
            <hr />
          </div>
          <div>
            <h4>University of Pennsylvania</h4>
            <p>Certificate, Full Stack Development</p>
            <p>2018 - 2018</p>
            <br />
            <p>Penn Arts and Sciences Coding Bootcamp - a 24 week full stack web development program.</p>
            <p>Skills learned: HTML, CSS, JavaScript, NodeJS, MySQL, Firebase, Bootstrap, ExpressJS, React.</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
    )
  };
};

export default Certifications;