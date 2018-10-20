import React from 'react';
import gqlFetch from '../../utils/gqlFetch';

class Skills extends React.Component {
  class = {};

  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h6>Profile > Skills</h6>
            <hr />
            <div className="card-group">
              <div>
                <div className="skill-div d-flex flex-column justiy-content-center align-items-center">
                  <img src="/images/badge.png" className="skill-img"  alt="skill badge"/>
                  <i className="fab fa-js-square skill-icon mx-auto"></i>
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Skills;