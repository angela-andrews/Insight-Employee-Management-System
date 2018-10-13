import React, { Component } from 'react';
import Navbar from '../Elements/Navbar';
import Menu from '../Elements/Menu'
// import data from '../../data/data'

class GoalsObjectives extends Component {
    
  
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
      <th scope="row">Andrews, Angela</th>
      <td>Increased closed call rate</td>
      <td>10/11/18</td>
      <td>11/11/18</td>
      <td>4.4</td>
    </tr>
    <tr>
      <th scope="row">Andrews, Angela</th>
      <td>Reduced number of open tickets</td>
      <td>10/15/18</td>
      <td>11/15/18</td>
      <td>4.8</td>
    </tr>
    <tr>
      <th scope="row">Lee, Stan</th>
      <td>Increased closed call rate</td>
      <td>10/9/18</td>
      <td>11/9/18</td>
      <td>4.1</td>
    </tr>
    <tr>
      <th scope="row">Lee, Stan</th>
      <td>Reduced number of open tickets</td>
      <td>10/19/18</td>
      <td>11/19/18</td>
      <td>4.2</td>
    </tr>
    <tr>
      <th scope="row">Danvers, Carol</th>
      <td>Increased closed call rate</td>
      <td>9/22/18</td>
      <td>10/22/18</td>
      <td>4.2</td>
    </tr>
    <tr>
      <th scope="row">Danvers, Carol</th>
      <td>Reduced number of open tickets</td>
      <td>9/29/18</td>
      <td>10/29/18</td>
      <td>3.2</td>
    </tr>
    <tr>
      <th scope="row">Prince, Diana</th>
      <td>Increased closed call rate</td>
      <td>9/22/18</td>
      <td>10/22/18</td>
      <td>4.2</td>
    </tr>
    <tr>
      <th scope="row">Prince, Diana</th>
      <td>Reduced number of open tickets</td>
      <td>9/29/18</td>
      <td>10/29/18</td>
      <td>3.2</td>
    </tr>
    <tr>
      <th scope="row">Majors, Lee</th>
      <td>Increased closed call rate</td>
      <td>9/22/18</td>
      <td>10/22/18</td>
      <td>4.9</td>
    </tr>
    <tr>
      <th scope="row">Majors, Lee</th>
      <td>Reduced number of open tickets</td>
      <td>9/29/18</td>
      <td>10/29/18</td>
      <td>4.2</td>
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