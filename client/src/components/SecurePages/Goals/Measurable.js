import React from 'react';

const Measurable = () => (
  <form>

    <fieldset disabled>
      <div class="form-group">
        <label for="currentPerf">Current Performance:</label>
        <input type="text" id="currentPerf" className="form-control" placeholder="50 Customers" />
      </div>
    </fieldset>

    <div className="form-group">
      <label for="newGoal">New Goal:</label>
      <input type="text" className="form-control" id="newGoal" />
    </div>

    <fieldset disabled>
      <div className="form-group">
        <label for="jobPercent">Percent of Current Job:</label>
        <input type="text" id="jobPercent" className="form-control" placeholder="35%" />
      </div>
    </fieldset>

    <button type="submit" className="btn btn-primary">Next -></button>

  </form>
);

export default Measurable;
