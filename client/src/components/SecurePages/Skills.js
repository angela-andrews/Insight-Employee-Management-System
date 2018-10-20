import React from 'react';
import gqlFetch from '../../utils/gqlFetch';

class Skills extends React.Component {
  state = {
    id: this.props.id,
    skills: [],
    loaded: false
  };

  async componentDidMount() {
    const dbResponse = await this.skillLookup();
    this.setState({ loaded: true, skills: dbResponse });
  };

  skillLookup() {
    return new Promise(resolve => {
      const query = 
      `query Employee($id: ID) {
        employee(id: $id) {
          skill {
            id
            skill
          }
        }
      }`
    gqlFetch.fetchById(this.state.id, query)
      .then(res => res.json())
      .then(res => resolve(res.data.employee.skill))
    })
  };

  faLookup(name) {
    switch (name) {
      case "Time Management":
        return(<i className="fas fa-business-time skill-icon mx-auto"></i>)
      case "Mathematics":
        return(<i className="fas fa-calculator skill-icon mx-auto"></i>)
      case "Communication":
        return(<i className="far fa-comments skill-icon mx-auto"></i>)
      case "Marketing":
        return(<i className="fas fa-highlighter skill-icon mx-auto"></i>)
      case "Accounting":
        return(<i className="fas fa-balance-scale skill-icon mx-auto"></i>)
      case "Project Management":
        return(<i className="fas fa-chart-bar skill-icon mx-auto"></i>)
      case "Bilingual":
        return(<i className="fas fa-language skill-icon mx-auto"></i>)
      default:
        return(<i className="fas fa-business-time skill-icon mx-auto"></i>)
    }
  };

  content() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            {this.state.skills.map(element => (
              <div key={element.id} className="skill-div d-flex flex-column justiy-content-center align-items-center">
                <img src="/images/badge.png" className="skill-img"  alt="skill badge"/>
                {this.faLookup(element.skill)}
                <p>{element.skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  render() {
    return(<>{this.state.loaded ? this.content() : null}</>);
  };
};

export default Skills;