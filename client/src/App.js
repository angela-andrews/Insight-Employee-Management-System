import React    from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
}               from "react-router-dom";
import Home     from "./components/Pages/Home";
import Signin   from "./components/Pages/SignIn";
import Callback from "./components/Auth/Callback";
import Auth     from "./components/Auth/Auth";
import Thankyou from "./components/Elements/Thankyou"
import               "./App.css"

const auth = new Auth();

const handleAuthentication = (props) => {
  if (/access_token|id_token|error/.test(props.location.hash)) {
    auth.handleAuthentication(props);
  };
};

const App = () => {
  return (
    <>
      <Router >
        <div>
          <Switch>
            <Route exact path="/"         render={ (props) => <Home auth={ auth } {...props} /> } />
            <Route path="/signin"         render={ (props) => <Signin auth={ auth } {...props} /> } /> 
            <Route path="/signout"        render={ (props) => <Thankyou auth={ auth } {...props} /> } />
            <Route path="/callback"       render={ (props) => {
              handleAuthentication(props);
              return <Callback {...props} /> 
            }}/> 
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;