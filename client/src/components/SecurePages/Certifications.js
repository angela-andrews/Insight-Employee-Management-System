import React from 'react';
import gqlFetch from '../../utils/gqlFetch';

class Certifications extends React.Component {
  state = {
    id: this.props.id,
    certs: [],
    loaded: false
  };

  async componentDidMount() {
    const dbResponse = await this.certsLookup();
    this.setState({ loaded: true, certs: dbResponse });
  };

  certsLookup() {
    return new Promise(resolve => {
      const query = 
      `query Employee($id: ID) {
        employee(id: $id) {
          certificate {
            id
            schoolName
            certificate
            date
            bullet1
            bullet2
          }
        }
      }`
    gqlFetch.fetchById(this.state.id, query)
      .then(res => res.json())
      .then(res => resolve(res.data.employee.certificate))
    })
  };
  
  content() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {this.state.certs.map(element => (<div key={element.id}>
              <h4>{element.schoolName}</h4>
              <p>{element.certificate}</p>
              <p>{element.date}</p>
              <ul>
                <li>{element.bullet1}</li>
                <li>{element.bullet2}</li>
              </ul>
              <hr />
            </div>))}
          </div>
        </div>
      </div>
    )
  };

  render() {
    return(<>{this.state.loaded ? this.content() : null}</>)
  }
};

export default Certifications;