import React from 'react';

const Time = () => (
  <>
  <div className="row">
  <fieldset>
    <legend>Choose your dates</legend>
    <div className="col-md-6">
        <label for="start">Due Date:</label>
        <input type="date" id="start" name="trip"
               value="2018-07-22"
               min="2018-01-01" max="2018-12-31" />
    </div>

    <div className="col-md-6">
        <label for="end">Follow-up Date:</label>
        <input type="date" id="end" name="trip"
               value="2018-07-29"
               min="2018-01-01" max="2018-12-31" />
    </div>

</fieldset>

</div>
<button type="submit" className="btn btn-primary">Next -></button>
</>
);

export default Time;