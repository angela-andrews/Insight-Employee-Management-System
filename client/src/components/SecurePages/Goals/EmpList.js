import React  from 'react';
import gql    from '../../../utils/gqlFetch';

class EmpList extends React.Component {
  state = {
    employeeList: []
  };

  componentDidMount() {
    this.fetchEmployees();
  };

  fetchEmployees = () => {
    gql.fetchData( `{ allEmployees { id firstName lastName position supervisor } }`)
    .then(res => res.json())
    .then(res => {
      this.setState({ employeeList: res.data.allEmployees })
    });
  };

  render() {
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Title</th>
            <th scope="col">Supervisor</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employeeList.map(employee => {
            return (
              <tr key={ employee.id }>
              <th scope="row">{ employee.id }</th>
              <td>{ employee.firstName }</td>
              <td>{ employee.lastName }</td>
              <td>{ employee.position }</td>
              <td>{ employee.supervisor }</td>
              </tr>)
          })}
        </tbody>
      </table>
    )
  }
};

export default EmpList;