import React from "react";

const Measurable = () => (
  <form>
    <fieldset disabled>
      <div className="form-group">
        <label htmlFor="currentPerf">Current Performance:</label>
        <input type="text" id="currentPerf" className="form-control" placeholder="50 Customers" />
      </div>
    </fieldset>

    <div className="form-group">
      <label htmlFor="newGoal">New Goal:</label>
      <input type="text" className="form-control" id="newGoal" />
    </div>

    <fieldset disabled>
      <div className="form-group">
        <label htmlFor="jobPercent">Percent of Current Job:</label>
        <input type="text" id="jobPercent" className="form-control" placeholder="35%" />
      </div>
    </fieldset>
  </form>
);

export default Measurable;
