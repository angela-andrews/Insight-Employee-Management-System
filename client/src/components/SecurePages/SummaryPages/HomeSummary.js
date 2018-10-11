import React from 'react';

const HomeSummary = () => (
  <fieldset>
            <h4>Home Address</h4>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Street Address</label>
                      <input id="address1" name="address1" type="text" className="form-control required" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Address Line 2</label>
                    <input id="address2" name="address2" type="text" className="form-control required email" />
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>City</label>
                    <input id="city" name="city" type="text" className="form-control required" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>State</label>
                    <input id="state" name="state" type="text" className="form-control" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Zip Code</label>
                    <input id="zipCode" name="zipCode" type="text" className="form-control required email" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Country</label>
                    <input id="country" name="country" type="text" className="form-control" />
                  </div>
                </div>
              </div>

          </fieldset>
);

export default HomeSummary;