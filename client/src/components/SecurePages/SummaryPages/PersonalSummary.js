import React from 'react';
import gqlFetch from "../../../utils/gqlFetch";

class PersonalSummary extends React.Component {
  state = {
    id: this.props.id,
    personalInfo: {},
    loaded: false
  };

  async componentDidMount() {
    const dbResponse = await this.personalLookup();
    this.setState({ loaded: true, personalInfo: dbResponse });
  };

  personalLookup() {
    return new Promise(resolve => {
      const query = 
      `query Employee($id: ID) {
        employee(id: $id) {
          firstName
          lastName
          personalSummary {
            title
            middleName
            dob
            gender
          }
        }
      }`
      gqlFetch.fetchById(this.state.id, query)
        .then(res => res.json())
        .then(res => resolve(res.data));
    });
  };

  content() {
    return (
      <fieldset>
        <h4 className="sub-title">Personal Summary</h4>
        
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Title</label>
              <input id="title" name="title" type="text" className="form-control required" placeholder={this.state.personalInfo.employee.personalSummary.title} />
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="form-group">
              <label>First Name</label>
              <input id="fName" name="fName" type="text" className="form-control required email" placeholder={this.state.personalInfo.employee.firstName}/>
            </div>
          </div>
        </div>
              
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Middle Name</label>
              <input id="mName" name="mName" type="text" className="form-control required" placeholder={this.state.personalInfo.employee.personalSummary.middleName}/>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="form-group">
              <label>Last Name</label>
              <input id="lName" name="lName" type="text" className="form-control" placeholder={this.state.personalInfo.employee.lastName}/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Date of Birth</label>
              <input id="dob" name="dob" type="text" className="form-control required email" placeholder={this.state.personalInfo.employee.personalSummary.dob}/>
            </div>
          </div>
                
          <div className="col-lg-6">
            <div className="form-group">
              <label>Sex / Gender</label>
              <input id="gender" name="gender" type="text" className="form-control" placeholder={this.state.personalInfo.employee.personalSummary.gender}/>
            </div>
          </div>
        </div>
      </fieldset>
    );
  };

  render() {
    return (
      <>
        {this.state.loaded ? this.content() : null }
      </>
    );
  };
};
export default PersonalSummary;