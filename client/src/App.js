import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import "./App.css"

import Feedback from "./components/Pages/Feedback";
import Home from "./components/Pages/Home";
import Signin from "./components/Pages/SignIn";

const App = () => (
  <>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/signin" component= { Signin }/>
          <Route exact path="/feedback" component= {Feedback} />
        </Switch>
      </div>
    </Router>
  </>
);

export default App;
