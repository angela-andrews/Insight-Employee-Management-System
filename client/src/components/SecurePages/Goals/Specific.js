import React from 'react';

const Specific = () => (
  <form>
    <div class="form-group">
      <label for="goalName">What is the goal?</label>
      <input type="text" class="form-control" id="goalName"  />
    </div>

    <div className="form-group">
      <label for="goalDesc">Add your description</label>
      <textarea className="form-control" id="goalDesc" rows="3"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Next -></button>
  </form>
);

export default Specific;
