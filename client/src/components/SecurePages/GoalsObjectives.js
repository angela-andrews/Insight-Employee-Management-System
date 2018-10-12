import React from 'react';
import Navbar from '../Elements/Navbar';
import Menu from '../Elements/Menu'
// import ReactTable from "react-table";
import 'react-table/react-table.css'
    

const GoalsObjectives = () => (
  <div>
    <Navbar
      imageSrc={"../images/mycompany.png"}
      imageAlt={"My Company Logo"}
      navLinks={["home", "profile", "signout"]}
      signIn={false}
      userName={"Angela"}
    />
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2">
          <Menu />
        </div>
        <div className="col-sm-9">
          
         
        </div>
      </div>
    </div>
  </div>
)

export default GoalsObjectives;