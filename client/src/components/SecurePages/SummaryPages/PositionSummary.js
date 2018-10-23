import React from 'react';
import gqlFetch from "../../../utils/gqlFetch";

class PositionSummary extends React.Component {
  state = {
    id: this.props.id,
    positionInfo: {},
    loaded: false
  };

  async componentDidMount() {
    const dbResponse = await this.positionLookup();
    this.setState({ loaded: true, positionInfo: dbResponse });
  };

  positionLookup = () => {
    return new Promise(resolve => {
      const query = 
      `query Employee($id: ID) {
        employee(id: $id) {
          positionSummary {
            deptName
            jobTitle
            startDate
            endDate
            timeType
            posType
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
        <h4 className="sub-title">Position Summary</h4>
        
        <div className="row"> 
          <div className="col-lg-6">
            <div className="form-group">
              <label className="label-home">Department Name</label>
                <input id="department" name="department" type="text" className="form-control required" placeholder={this.state.positionInfo.employee.positionSummary.deptName} />
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="form-group">
              <label className="label-home">Job Title</label>
              <input id="jobTitle" name="jobTitle" type="text" className="form-control required email" placeholder={this.state.positionInfo.employee.positionSummary.jobTitle} />
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label className="label-home">Start Date</label>
              <input id="startDate" name="startDate" type="text" className="form-control required" placeholder={this.state.positionInfo.employee.positionSummary.startDate} />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label className="label-home">End Date</label>
              <input id="endDate" name="endDate" type="text" className="form-control" placeholder={this.state.positionInfo.employee.positionSummary.endDate} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label className="label-home">Full/Part Time</label>
              <input id="fpTime" name="fpTime" type="text" className="form-control required email" placeholder={this.state.positionInfo.employee.positionSummary.timeType} />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label className="label-home">Regular / Temporary</label>
              <input id="regTemp" name="regTemp" type="text" className="form-control" placeholder={this.state.positionInfo.employee.positionSummary.posType}/>
            </div>
          </div>
        </div>
      </fieldset>
    );
  };

  render() {
    return(
      <>
        {this.state.loaded ? this.content() : null }
      </>
    );
  };
};
 
export default PositionSummary;