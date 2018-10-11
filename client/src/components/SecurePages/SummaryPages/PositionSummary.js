import React from 'react';

const PositionSummary = () => (
  <fieldset>
            <h4>Position Summary</h4>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Department Name</label>
                      <input id="department" name="department" type="text" className="form-control required" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Job Title</label>
                    <input id="jobTitle" name="jobTitle" type="text" className="form-control required email" />
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Start Date</label>
                    <input id="startDate" name="startDate" type="text" className="form-control required" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>End Date</label>
                    <input id="endDate" name="endDate" type="text" className="form-control" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Full/Part Time</label>
                    <input id="fpTime" name="fpTime" type="text" className="form-control required email" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Regular / Temporary</label>
                    <input id="regTemp" name="regTemp" type="text" className="form-control" />
                  </div>
                </div>
              </div>

          </fieldset>
);

export default PositionSummary;