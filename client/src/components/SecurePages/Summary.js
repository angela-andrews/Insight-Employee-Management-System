import React from "react";

import gqlFetch from "../../utils/gqlFetch";

import HomeSummary from "./SummaryPages/HomeSummary";
import PersonalSummary from "./SummaryPages/PersonalSummary";
import PositionSummary from "./SummaryPages/PositionSummary";
import WorkSummary from "./SummaryPages/WorkSummary";

class Summary extends React.Component {
  state = {
    clicked: "home",
    id: this.props.id,
    singinName: ""
  };
  
  componentDidMount() {
    this.nameLookup();
  };

  nameLookup = () => {
    gqlFetch.fetchEmpById(this.state.id)
      .then(res => res.json())
      .then(res => this.setState({ singinName: res.data.employee }));
  };

  handleButton(e) {
    this.setState({ clicked: e.target.name })
  };

  handleDisplay() {
    switch (this.state.clicked) {
      case "home":
        return <HomeSummary />;
      case "work":
        return <WorkSummary />;
      case "position":
        return <PositionSummary />;
      case "personal":
        return <PersonalSummary />;
      default:
        return <HomeSummary />
    } 
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                <button type="button" name="home" onClick={(event) => this.handleButton(event)} className="btn btn-secondary">Home Address</button>
                <button type="button" name="work" onClick={(event) => this.handleButton(event)} className="btn btn-secondary">Work Address</button>
                <button type="button" name="position" onClick={(event) => this.handleButton(event)} className="btn btn-secondary">Position Summary</button>
                <button type="button" name="personal" onClick={(event) => this.handleButton(event)} className="btn btn-secondary">Personal Summary</button>
              </div>
              <h1>{`${this.state.singinName.firstName} ${this.state.singinName.lastName}`}</h1>
              <hr />
              {this.handleDisplay()}
            </div>
          </div>
        </div>
      </>
    );
  };
};

export default Summary;