import React from 'react';

const steps = ["Specific", "Measurable", "Actionable", "Relevant", "Time-bound"];

const styles = {
  height: "100px",
  width: "100px"
};

const NewGoalHeader = () => (
  <div>
    <div className="row">
      {steps.map((step, index) => {
        return(
          <div key={index} className="col">
            <p className="text-center">{step}</p>
            {step === "Time-bound" ? 
            <img className="img-fluid" alt="red-x" src="../images/green_check.png" style={styles} />
            :
            <img className="img-fluid" alt="red-x" src="../images/red_x.jpg" />
            }
          </div>
        )
      })} 
    </div>
    <hr />
  </div>
);

export default NewGoalHeader;