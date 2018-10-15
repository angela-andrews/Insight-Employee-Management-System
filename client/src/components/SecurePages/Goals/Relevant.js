import React from 'react';

const Relevant = () => (
  <form>

    <fieldset disabled>
      <div className="form-group">
        <label htmlFor="currentPerf">Job Category:</label>
        <input type="text" id="currentPerf" className="form-control" placeholder="50 Customers" />
      </div>

      <div className="form-group">
        <label htmlFor="jobPercent">Percent of Current Job:</label>
        <input type="text" id="jobPercent" className="form-control" placeholder="35%" />
      </div>
    </fieldset>

  </form>
);

export default Relevant;
