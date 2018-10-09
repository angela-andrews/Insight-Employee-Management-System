import React from 'react';
import Navbar from '../Elements/Navbar';

const SignIn = () => (
  <Navbar
    imageSrc={"images/mycompany.png"}
    imageAlt={"My Company Logo"}
    navLinks={["home", "profile", "signout"]}
    signIn={false}
    userName={"Dan"}
  />
);

export default SignIn;