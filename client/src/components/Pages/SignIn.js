import React from 'react';
import Navbar from '../Elements/Navbar';
import Sidebar from "../Elements/Sidebar";
import Menu from "../Elements/Menu";
import { Route } from "react-router-dom";
import Summary from "../SecurePages/Summary";
import Education from "../SecurePages/Education";
import Awards from "../SecurePages/Awards";
import Certifications from "../SecurePages/Certifications";
import GoalsObjectives from "../SecurePages/GoalsObjectives";
import Skills from "../SecurePages/Skills";
import WorkHistory from "../SecurePages/WorkHistory";
import NewGoal from "../SecurePages/Goals/NewGoal";

const SignIn = () => (
  <div>
      <Navbar
        imageSrc={"images/mycompany.png"}
        imageAlt={"My Company Logo"}
        navLinks={["home", "profile", "signout"]}
        signIn={false}
        userName={"Dan"}
      />
    <div className="container-fluid">
      <div className="row">
      <div className="d-flex align-items-start">
        <Sidebar />
        <Menu />
        <div>
          <Route exact path="/signin/summary" component= { Summary }/>
          <Route exact path="/signin/education" component= { Education }/>
          <Route exact path="/signin/awards" component= { Awards }/>
          <Route exact path="/signin/certs" component= { Certifications }/>
          <Route exact path="/signin/goals" component= { GoalsObjectives }/>
          <Route exact path="/signin/skills" component= { Skills }/>
          <Route exact path="/signin/whistory" component= { WorkHistory }/>
          <Route exact path="/signin/newgoal" component= { NewGoal }/>
        </div>
      </div>
      </div>
    </div>

  </div>

);

export default SignIn;