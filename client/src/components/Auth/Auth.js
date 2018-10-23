//import history from './History';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './authO-variables';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: 'token id_token',
    scope: 'openid'
  });


  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    this.auth0.authorize();
  }
  
  handleAuthentication(props) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        props.history.replace('/signin');
        console.log(authResult.idTokenPayload)
      } else if (err) {
        props.history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    if(authResult.idTokenPayload.sub === "google-oauth2|110476957509667863869") {
      localStorage.setItem('employee_id', 927675)
    } else if (authResult.idTokenPayload.sub === "google-oauth2|112420433515438364916") {
      localStorage.setItem('employee_id', 544029)
    } else if (authResult.idTokenPayload.sub === "google-oauth2|116492861416056052076") {
      localStorage.setItem('employee_id', 575811)
    } else if (authResult.idTokenPayload.sub === "auth0|5bccf3f9f5129b3189f9e707") {
      localStorage.setItem('employee_id', 169497)
    } else if (authResult.idTokenPayload.sub === "google-oauth2|114230559307588310257") {
      localStorage.setItem('employee_id', 441186)
    // navigate to the home route
   // history.replace('/signin');
  }
}

  logout(props) {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('employee_id');
    // navigate to the home route
    props.history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}