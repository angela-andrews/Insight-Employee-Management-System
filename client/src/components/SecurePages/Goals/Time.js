import React from 'react';

const Time = () => (
  <fieldset className="fieldset-time">
    <h5 className="title-time">Choose your dates</h5>
    <div className="col-md-5 div-time">
        <label htmlFor="start">Due Date </label>
        <input className="input-time" type="date" id="start" name="trip"
            defaultValue="2018-07-22"
            min="2018-01-01" max="2018-12-31" />
    </div>

    <div className="col-md-5 div-time">
        <label htmlFor="end">Follow-up Date </label>
        <input className="input-time" type="date" id="end" name="trip"
            defaultValue="2018-07-29"
            min="2018-01-01" max="2018-12-31" />
    </div>
  </fieldset>
);

export default Time;