import React from 'react';

const Education = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div>
          <h4>Universidad de Buenos Aires</h4>
          <p className="education-info">Bachelor of Science BS, Biological Sciences / Laboratory Animal Science</p>
          <p className="education-info">2002 - 2005</p>
          <hr />
        </div>
        <div>
          <h4>University of Pennsylvania</h4>
          <p className="education-info">Certificate, Full Stack Development</p>
          <p className="education-info">2018 - 2018</p>
          <ul>
            <li className="education-info">Penn Arts and Sciences Coding Bootcamp - a 24 week full stack web development program.</li>
            <li className="education-info">Skills learned: HTML, CSS, JavaScript, NodeJS, MySQL, Firebase, Bootstrap, ExpressJS, React.</li>
          </ul>
          <hr />
        </div>
      </div>
    </div>
  </div>
)

export default Education;