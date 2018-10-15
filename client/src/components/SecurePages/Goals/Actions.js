import React from 'react';

const actionSteps = [1, 2, 3, 4]

const Actions = props => (
  <div>
    {actionSteps.map((action, index) => {
      return(
        <div className="input-group mb-3" key={index}>
          <div className="input-group-prepend">
            <button type="button" className="btn btn-outline-secondary">Action {`${action}`}</button>
          </div>
          <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
          <div className="input-group-append">
            <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Add Action</a>
              <div role="separator" className="dropdown-divider"></div>
              <a className="dropdown-item text-danger" href="#">Remove Action</a>
            </div>
          </div>
        </div>
      )
    })}
    <button {...props}>Next -></button>
  </div>
);

export default Actions;