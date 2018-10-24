import React            from "react";
import gqlFetch         from "../../utils/gqlFetch";
import HomeSummary      from "./SummaryPages/HomeSummary";
import PersonalSummary  from "./SummaryPages/PersonalSummary";
import PositionSummary  from "./SummaryPages/PositionSummary";
import WorkSummary      from "./SummaryPages/WorkSummary";

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
    const query = 
    `query Employee($id: ID) {
      employee(id: $id) {
        firstName
        lastName
      }
    }`
    gqlFetch.fetchById(this.state.id, query)
    .then(res => res.json())
    .then(res => this.setState({ singinName: res.data.employee }));
  };

  handleButton(e) {
    this.setState({ clicked: e.target.name });
  };

  handleDisplay() {
    switch (this.state.clicked) {
      case "home":
        return <HomeSummary id={ this.state.id }/>;
      case "work":
        return <WorkSummary id={ this.state.id }/>;
      case "position":
        return <PositionSummary id={ this.state.id }/>;
      case "personal":
        return <PersonalSummary id={ this.state.id }/>;
      default:
        return <HomeSummary id={ this.state.id }/>
    }
  };

  render() {
    return (
      <div className="container no-margin">
        <div className="row">
          <div className="col-sm-12">
            <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
              <button type="button" name="home" onClick={ (event) => this.handleButton(event) } className="btn summary-menu side-left">Home Address</button>
              <button type="button" name="work" onClick={ (event) => this.handleButton(event) } className="btn summary-menu">Work Address</button>
              <button type="button" name="position" onClick={ (event) => this.handleButton(event) } className="btn summary-menu">Position Summary</button>
              <button type="button" name="personal" onClick={ (event) => this.handleButton(event) } className="btn summary-menu side-right">Personal Summary</button>
            </div>
            <h1 className="signin-name">{ `${this.state.singinName.firstName} ${this.state.singinName.lastName}` }</h1>
            <hr />
            { this.handleDisplay() }
          </div>
        </div>
      </div>
    );
  };
};

export default Summary;