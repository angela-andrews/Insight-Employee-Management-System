import React from 'react';
import gqlFetch from "../../utils/gqlFetch";

class Awards extends React.Component {
  state = {
    id: this.props.id,
    awards: [],
    loaded: false
  };

  async componentDidMount() {
    const dbResponse = await this.awardLookup();
    this.setState({ loaded: true, awards: dbResponse });
  };

  awardLookup() {
    return new Promise(resolve => {
      const query = 
      `query Employee($id: ID) {
        employee(id: $id) {
          award {
            id
            type
            date
            dollarAmount
            reason
            status
          }
        }
      }`
    gqlFetch.fetchById(this.state.id, query)
      .then(res => res.json())
      .then(res => resolve(res.data.employee.award))
    })
  };    

  content() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Gift</th>
                  <th scope="col">Date</th>
                  <th scope="col">Vale / Location</th>
                  <th scope="col">Reason</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.awards.map((element, index) => (
                  <tr key={element.id}>
                    <th scope="row">{`${index +1}`}</th>
                    <td><img src="../images/movie50.png" alt="movie"></img></td>
                    <td>{element.date}</td>
                    <td>{element.dollarAmount}</td>
                    <td>{element.reason}</td>
                    <td>{element.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return(<>{this.state.loaded ? this.content() : null}</>)
  }
};

export default Awards;