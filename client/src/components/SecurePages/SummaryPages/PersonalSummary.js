import React from 'react';

const PersonalSummary = () => (
  <fieldset>
            <h4>Personal Summary</h4>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Title</label>
                      <input id="title" name="title" type="text" className="form-control required" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>First Name</label>
                    <input id="fName" name="fName" type="text" className="form-control required email" />
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Middle Name</label>
                    <input id="mName" name="mName" type="text" className="form-control required" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input id="lName" name="lName" type="text" className="form-control" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input id="dob" name="dob" type="text" className="form-control required email" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Sex / Gender</label>
                    <input id="gender" name="gender" type="text" className="form-control" />
                  </div>
                </div>
              </div>

          </fieldset>
);

export default PersonalSummary;