import React    from "react";
import gqlFetch from "../../../utils/gqlFetch";

class WorkSummary extends React.Component {
  state = {
    id: this.props.id,
    workAddress: {},
    loaded: false
  };

  async componentDidMount() {
    const dbResponse = await this.workLookup();
    this.setState({ loaded: true, workAddress: dbResponse })
  };

  workLookup = () => {
    return new Promise(resolve => {
      const query = 
      `query Employee($id: ID) {
        employee(id: $id) {
          workAddress {
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
      <h4 className="sub-title">Work Address</h4>

        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label className="label-home">Street Address</label>
                <input id="address1" name="address1" type="text" className="form-control required" placeholder={ this.state.workAddress.employee.workAddress.streetOne }  />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label className="label-home">Address Line 2</label>
              <input id="address2" name="address2" type="text" className="form-control required email" placeholder={ this.state.workAddress.employee.workAddress.streetTwo } />
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label className="label-home">City</label>
              <input id="city" name="city" type="text" className="form-control required" placeholder={ this.state.workAddress.employee.workAddress.city }/>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label className="label-home">State</label>
              <input id="state" name="state" type="text" className="form-control" placeholder={ this.state.workAddress.employee.workAddress.state }/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label className="label-home">Zip Code</label>
              <input id="zipCode" name="zipCode" type="text" className="form-control required email" placeholder={ this.state.workAddress.employee.workAddress.zip }/>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label className="label-home">Country</label>
              <input id="country" name="country" type="text" className="form-control" placeholder={ this.state.workAddress.employee.workAddress.country }/>
            </div>
          </div>
        </div>

    </fieldset>
    );
  };

  render() {
    return (<>{ this.state.loaded ? this.content() : null }</>);
  };
  
};

export default WorkSummary;