import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import "./App.css"

import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Customers from "./components/Pages/Customers";
import Company from "./components/Pages/Company";
import Signin from "./components/Pages/SignIn";
import Summary from "./components/SecurePages/Summary";
import Education from "./components/SecurePages/Education";
import Awards from "./components/SecurePages/Awards";
import Certifications from "./components/SecurePages/Certifications";
import GoalsObjectives from "./components/SecurePages/GoalsObjectives";
import Skills from "./components/SecurePages/Skills";
import WorkHistory from "./components/SecurePages/WorkHistory";

const App = () => (
  <div>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/products" component= { Products }/>
          <Route exact path="/customers" component= { Customers }/>
          <Route exact path="/company" component= { Company }/>
          <Route exact path="/signin" component= { Signin }/>
          <Route exact path="/signin/summary" component= { Summary }/>
          <Route exact path="/signin/education" component= { Education }/>
          <Route exact path="/signin/awards" component= { Awards }/>
          <Route exact path="/signin/certs" component= { Certifications }/>
          <Route exact path="/signin/goals" component= { GoalsObjectives }/>
          <Route exact path="/signin/skills" component= { Skills }/>
          <Route exact path="/signin/whistory" component= { WorkHistory }/>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
