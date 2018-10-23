import React from 'react';

const NextButton = ({ onClick, step }) => (
  <button type="submit" className="button-next btn" onClick={onClick}>{(step === "Employee" ? "Start" : "Next ►")}</button>
);

export default NextButton;