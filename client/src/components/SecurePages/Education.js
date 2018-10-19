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
            {this.state.education.map(element => (<div key={element.id}>
              <h4>{element.schoolName}</h4>
              <p className="education-info">{element.degree}</p>
              <p className="education-info">{element.startDate} - {element.endDate}</p>            
              <ul>
                <li className="education-info">{element.bullet1}</li>
                <li className="education-info">{element.bullet2}</li>
              </ul>
              <hr />
            </div>))}
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