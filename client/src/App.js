import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Customers from "./components/Customers";
import Company from "./components/Company";
import SignIn from "./components/SignIn";

const App = () => (
  <div className="container">
    <Navbar />
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/products" component= { Products }/>
          <Route exact path="/customers" component= { Customers }/>
          <Route exact path="/company" component= { Company }/>
          <Route exact path="/signin" component={ SignIn}/>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
