import React from "react";
import { Route } from "react-router-dom";

import gqlFetch from "../../utils/gqlFetch";

import Menu from "../Elements/Menu";
import Navbar from "../Elements/Navbar";
import Sidebar from "../Elements/Sidebar";

import Awards from "../SecurePages/Awards";
import Certifications from "../SecurePages/Certifications";
import Education from "../SecurePages/Education";
import GoalsObjectives from "../SecurePages/GoalsObjectives";
import NewGoal from "../SecurePages/Goals/NewGoal";
import Skills from "../SecurePages/Skills";
import Summary from "../SecurePages/Summary";
import WorkHistory from "../SecurePages/WorkHistory";


class SignIn extends React.Component {
  state = {
    id: null,
    empID: parseInt(localStorage.getItem('employee_id')),
    singinName: "",
    loaded: false
  };

  login() {
    this.props.auth.login();
  }

  async componentDidMount() {
    if (!this.props.auth.isAuthenticated()){
      this.props.history.replace("/")
    } else {
      const dbResponse = await this.employeeLookUp();
      this.setState({ loaded: true, id: dbResponse.id, singinName: dbResponse.firstName }); 
    }
    console.log(parseInt(localStorage.getItem('employee_id')))
  };

  employeeLookUp = () => {
    return new Promise(resolve => {
      const query = 
      `query employeeByID($id: Int) {
        employeeByID(employeeID: $id) {
          firstName
          lastName
          id
        }
      }`
      gqlFetch.fetchById(this.state.empID, query)
       .then(res => res.json())
       .then(res => resolve(res.data.employeeByID));
    })
  };

  
  content() {
   
    return (
      <>
        <Navbar
          imageSrc={"images/mycompany.png"}
          imageAlt={"My Company Logo"}
          navLinks={["signout"]}
          auth={this.props.auth}
          userName={this.state.singinName}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="d-flex align-items-start">
              <Sidebar />
              <Menu />
              <div>
                <Route exact path="/signin/summary"   render=     {() => <Summary         id={this.state.id} />}/>
                <Route exact path="/signin/education" render=     {() => <Education       id={this.state.id} />}/>
                <Route exact path="/signin/awards"    render=     {() => <Awards          id={this.state.id} />}/>
                <Route exact path="/signin/certs"     render=     {() => <Certifications  id={this.state.id} />}/>
                <Route exact path="/signin/goals"     component=  { GoalsObjectives }/>
                <Route exact path="/signin/skills"    component=  {() => <Skills          id={this.state.id} />}/>
                <Route exact path="/signin/whistory"  render=     {() => <WorkHistory     id={this.state.id} />}/>
                <Route exact path="/signin/newgoal"   component=  { NewGoal }/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }; 

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <>{this.state.loaded ? this.content() : null}
      {isAuthenticated()}{!isAuthenticated()}
    </>);
  };

};

export default SignIn;