import React from 'react';

import Navbar from '../Elements/Navbar';
import Menu from '../Elements/Menu'
import HomeSummary from './SummaryPages/HomeSummary';
import WorkSummary from './SummaryPages/WorkSummary';
import PositionSummary from './SummaryPages/PositionSummary';
import PersonalSummary from './SummaryPages/PersonalSummary';

class Summary extends React.Component {

  state = {
    clicked: "home"
  }
  
  handleButton(event) {
    this.setState({ clicked: event.target.name })
  }

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
  }

  render() {
    return (
<div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <button type="button" name="home" onClick={(event) => this.handleButton(event)} className="btn btn-secondary">Home Address</button>
            <button type="button" name="work" onClick={(event) => this.handleButton(event)} className="btn btn-secondary">Work Address</button>
            <button type="button" name="position" onClick={(event) => this.handleButton(event)} className="btn btn-secondary">Position Summary</button>
            <button type="button" name="personal" onClick={(event) => this.handleButton(event)} className="btn btn-secondary">Personal Summary</button>
          </div>
          <h1>Daniel Gross</h1>
          <hr />
            {this.handleDisplay()}
        </div>
      </div>
    </div>
  </div>
    )
  }
  
}

export default Summary;