import React from 'react';

const actionSteps = [1, 2, 3, 4]

const Actions = () => (
  <div>
    {actionSteps.map(action => {
      return(
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button type="button" class="btn btn-outline-secondary">Action {`${action}`}</button>
          </div>
          <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" />
          <div class="input-group-append">
            <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Add Action</a>
              <div role="separator" class="dropdown-divider"></div>
              <a class="dropdown-item text-danger" href="#">Remove Action</a>
            </div>
          </div>
        </div>
      )
    })}
  <button type="submit" className="btn btn-primary">Next -></button>
  </div>
);

export default Actions;