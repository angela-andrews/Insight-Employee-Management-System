import React from "react";
import gqlFetch from "../../utils/gqlFetch";

class WorkHistory extends React.Component {
  state = {
    id: this.props.id,
    workHistory: [],
    loaded: false
  };
  
  async componentDidMount() {
    const dbResponse = await this.workHistoryLookup();
    this.setState({ loaded: true, workHistory: dbResponse })
  };

  workHistoryLookup = () => {
    return new Promise(resolve => {
      const query = 
      `query Employee($id: ID) {
        employee(id: $id) {
          workHistory {
            id
            jobTitle
            companyName
            startDate
            endDate
            location
            bullet1
            bullet2
            bullet3
            bullet4
          }
        }
      }`
    gqlFetch.fetchById(this.state.id, query)
      .then(res => res.json())
      .then(res => resolve(res.data.employee.workHistory))
    })
  };

  content() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {this.state.workHistory.map(element => (<div key={element.id}>
              <h4>{element.jobTitle}</h4>
              <div className="job-title d-flex justify-content-between">
                <p>{element.companyName}</p>            
                <p>{element.startDate} - {element.endDate}</p>
                <p>{element.location}</p>
              </div>
              <ul>
                <li>{element.bullet1}</li>
                <li>{element.bullet2}</li>
                <li>{element.bullet3}</li>
                <li>{element.bullet4}</li>
              </ul>
              <hr />
            </div>))}
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <>
        {this.state.loaded ? this.content() : null}
      </>
    );
  };
};


export default WorkHistory;