import React from 'react';
import gqlFetch from "../../utils/gqlFetch";

class Education extends React.Component {
  state= {
    id: this.props.id,
    education: [],
    loaded: false
  };

  async componentDidMount() {
    const dbResponse = await this.educationLookup();
    this.setState({ loaded: true, education: dbResponse });
    console.log(this.state.education)
  };

  educationLookup() {
    return new Promise(resolve => {
      const query = 
      `query Employee($id: ID) {
        employee(id: $id) {
          education {
            id
            schoolName
            degree
            startDate
            endDate
            bullet1
            bullet2
          }
        }
      }`
    gqlFetch.fetchById(this.state.id, query)
      .then(res => res.json())
      .then(res => resolve(res.data.employee.education))
    })
  };

  content() {
    return(
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
    );
  };

  render() {
    return (<>{this.state.loaded ? this.content() : null}</>)
  };
};

export default Education;