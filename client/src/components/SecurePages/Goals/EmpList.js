import React from 'react';

const people = [
  {empID: 1, firstName: "Angela",     lastName: "Andrews",  position: "Accountant", random: "random"},
  {empID: 2, firstName: "Dan",        lastName: "Gross",    position: "Controller", random: "random"},
  {empID: 3, firstName: "Guillermo",  lastName: "Barila",   position: "Marketing",  random: "random"},
  {empID: 4, firstName: "Megan",      lastName: "Anthony",  position: "Analyst",    random: "random"}
];

const EmpList = props => (
  <>
  <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">Last Name</th>
        <th scope="col">First Name</th>
        <th scope="col">Position</th>
        <th scope="col">Something Else</th>
        <th scope="col">Click Me</th>
      </tr>
    </thead>
    <tbody>
      {people.map(person => {
        return (
          <tr key={person.empID}>
            <th scope="row">{person.lastName}</th>
            <td>{person.firstName}</td>
            <td>{person.position}</td>
            <td>{person.random}</td>
            <button>Click Me</button>
        </tr>)
      })}
    </tbody>
  </table>
  <button {...props}>Next -></button>
  </>
);

export default EmpList;