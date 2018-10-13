import React, { Component } from 'react';
import Navbar from '../Elements/Navbar';
import Menu from '../Elements/Menu'
import data from '../../data/data'

class GoalsObjectives extends Component {
    state = {
        data:data
    }
  
    render(){

    return(
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
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Goals</th>
      <th scope="col">Goal Started</th>
      <th scope="col">Due Date</th>
      <th scope="col">Quality Score</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{data.lName}, {data.fName}</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
        
        </div>
      </div>
    </div>
  </div>
     ) }
}

export default GoalsObjectives;