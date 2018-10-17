import React from 'react';
import gqlFetch from "../../../utils/gqlFetch";

class HomeSummary extends React.Component {
  state = {
    id: this.props.id,
    homeAddress: {},
    loaded: false
  };

  async componentDidMount() {
    const dbResponse = await this.homeLookup();
    this.setState({ loaded: true, homeAddress: dbResponse })
  };

  homeLookup = () => {
    return new Promise(resolve => {
      const query = 
      `query Employee($id: ID) {
        employee(id: $id) {
          homeAddress {
            streetOne
            streetTwo
            city
            state
            zip
            country
          }
        }
      }`
      gqlFetch.fetchById(this.state.id, query)
        .then(res => res.json())
        .then(res => resolve(res.data));
    });
  };

  content() {
    return (
      <fieldset>
      <h4>Home Address</h4>

        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Street Address</label>
                <input id="address1" name="address1" type="text" className="form-control required" placeholder={this.state.homeAddress.employee.homeAddress.streetOne}  />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label>Address Line 2</label>
              <input id="address2" name="address2" type="text" className="form-control required email" placeholder={this.state.homeAddress.employee.homeAddress.streetTwo} />
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>City</label>
              <input id="city" name="city" type="text" className="form-control required" placeholder={this.state.homeAddress.employee.homeAddress.city}/>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label>State</label>
              <input id="state" name="state" type="text" className="form-control" placeholder={this.state.homeAddress.employee.homeAddress.state}/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Zip Code</label>
              <input id="zipCode" name="zipCode" type="text" className="form-control required email" placeholder={this.state.homeAddress.employee.homeAddress.zip}/>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label>Country</label>
              <input id="country" name="country" type="text" className="form-control" placeholder={this.state.homeAddress.employee.homeAddress.country}/>
            </div>
          </div>
        </div>

    </fieldset>
    );
  };

  render() {
    return (
      <>
        {this.state.loaded ? this.content() : null}
      </>
    );
  };
};

export default HomeSummary;