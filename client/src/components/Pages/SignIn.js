import React from 'react';
import Navbar from '../Elements/Navbar';
import Menu from "../Elements/Menu"

const SignIn = () => (
  <div>
    <Navbar
      imageSrc={"images/mycompany.png"}
      imageAlt={"My Company Logo"}
      navLinks={["home", "profile", "signout"]}
      signIn={false}
      userName={"Dan"}
    />
    <Menu />
  </div>

);

export default SignIn;