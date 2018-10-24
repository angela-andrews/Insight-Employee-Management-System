import React from 'react';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './authO-variables';

class Auth extends React.Component {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  };
  
  handleAuthentication(props) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        props.history.replace('/signin');
      } else if (err) {
        props.history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      };
    });
  };

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
    };
  };

  logout(props) {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('employee_id');
    props.history.replace('/signout');
  };

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  };
};

export default Auth;