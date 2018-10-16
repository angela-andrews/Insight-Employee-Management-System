import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import "./App.css"

import Company from "./components/Pages/Company";
import Customers from "./components/Pages/Customers";
import Feedback from "./components/Pages/Feedback";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Signin from "./components/Pages/SignIn";

const App = () => (
  <>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/products" component= { Products }/>
          <Route exact path="/customers" component= { Customers }/>
          <Route exact path="/company" component= { Company }/>
          <Route path="/signin" component= { Signin }/>
          <Route exact path="/feedback" component= {Feedback} />
        </Switch>
      </div>
    </Router>
  </>
);

export default App;
