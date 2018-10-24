import React from "react";

const Specific = () => (
  <form>
    <div className="form-group">
      <label htmlFor="goalName">What is the goal?</label>
      <input type="text" className="form-control" id="goalName"  />
    </div>

    <div className="form-group">
      <label htmlFor="goalDesc">Add your description</label>
      <textarea className="form-control" id="goalDesc" rows="3"></textarea>
    </div>
  </form>
);

export default Specific;
