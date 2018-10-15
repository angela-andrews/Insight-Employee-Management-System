import React from 'react';

const Time = () => (
  <>
  <div className="row">
  <fieldset>
    <legend>Choose your dates</legend>
    <div className="col-md-6">
        <label htmlFor="start">Due Date:</label>
        <input type="date" id="start" name="trip"
               defaultValue="2018-07-22"
               min="2018-01-01" max="2018-12-31" />
    </div>

    <div className="col-md-6">
        <label htmlFor="end">Follow-up Date:</label>
        <input type="date" id="end" name="trip"
               defaultValue="2018-07-29"
               min="2018-01-01" max="2018-12-31" />
    </div>

</fieldset>

</div>

</>
);

export default Time;