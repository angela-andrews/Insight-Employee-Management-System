import React from 'react';

const NewGoalHeader = ({ steps, currentStep }) => (
  <div className="progress-bar-div d-flex">
    {steps.map((step, index) => {
      return(
        <div key={index}>
          <p className={ (step.name === currentStep) ? "text-center progress-bar-current" : "text-center" }>{ step.name }</p>
          { step.value === true ? 
          <img className="progress-bar-img" alt="red-x" src="../images/bar_full1.png" />
          :
          <img className="progress-bar-img" alt="red-x" src="../images/bar_empty1.png" />
          }
        </div>
      )
    })} 
  </div>
);

export default NewGoalHeader;