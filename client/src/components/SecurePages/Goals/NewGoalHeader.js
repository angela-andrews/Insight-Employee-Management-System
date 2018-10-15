import React from 'react';

const steps = ["Specific", "Measurable", "Actionable", "Relevant", "Time-bound"];

const NewGoalHeader = () => (
  <div>
    <div className="row">
      {steps.map((step, index) => {
        return(
          <div key={index} className="col">
            <p className="text-center">{step}</p>
            <img className="img-fluid" alt="red-x" src="../images/red_x.jpg" />
          </div>
        )
      })} 
    </div>
    <hr />
  </div>
);

export default NewGoalHeader;