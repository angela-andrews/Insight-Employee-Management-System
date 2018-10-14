import React from 'react';
import Navbar from '../../Elements/Navbar'
import Menu from '../../Elements/Menu'

const NewGoal = () => (
  <div>
    <Navbar
      imageSrc={"../images/mycompany.png"}
      imageAlt={"My Company Logo"}
      navLinks={["home", "profile", "signout"]}
      signIn={false}
      userName={"Dan"}
    />
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2">
          <Menu />
        </div>
        <div className="col-sm-10">

        </div>
      </div>
    </div>
  </div>
)

export default NewGoal;