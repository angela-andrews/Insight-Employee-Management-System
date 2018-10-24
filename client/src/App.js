

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import "./App.css"

import Feedback from "./components/Pages/Feedback";
import Home from "./components/Pages/Home";
import Signin from "./components/Pages/SignIn";
import Signout from "./components/Pages/SignOut";
import Callback from "./components/Auth/Callback";
import Auth from "./components/Auth/Auth";
import Thankyou from "./components/Elements/Thankyou"

const auth = new Auth();

const handleAuthentication = (props) => {
  if (/access_token|id_token|error/.test(props.location.hash)) {
    auth.handleAuthentication(props);
  }
}



export const App = () => {
  return (
  <div>
    <Router >
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/signin"  render={(props) => <Signin auth={auth} {...props} />} /> 
          <Route path="/signout" render={(props) => <Thankyou auth={auth} {...props} /> } />
          <Route exact path="/feedback" render={(props) => <Feedback auth={auth} {...props} />} /> 
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/> 
        </Switch>
      </div>
    </Router>
    </div>
  );
        }

  

  export default App;