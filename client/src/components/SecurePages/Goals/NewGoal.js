import React          from 'react';
import NewGoalHeader  from './NewGoalHeader';
import EmpList        from  './EmpList';
import Specific       from './Specific';
import Measurable     from './Measurable';
import Actions        from './Actions';
import Relevant       from './Relevant';
import Time           from './Time';
import NextButton     from './NextButton';
import Complete       from './Complete';

class NewGoal extends React.Component {

  state = {
    currentStep: "Employee",
    steps: [
      {name: "Specific",    value: false},
      {name: "Measureable", value: false},
      {name: "Action",      value: false},
      {name: "Relevant",    value: false},
      {name: "Time",        value: false}
    ]
  }

  updateSteps(stepComplete, nextStep) {
    const updated = [...this.state.steps].map(step => {
      if(step.name === stepComplete) {
        let newStep = {
          name: stepComplete,
          value: true
        }
        return newStep
      } else {
        return step
      }
    })
    this.setState({ steps : updated, currentStep: nextStep});
  };
  

  handleWizard() {
    switch (this.state.currentStep) {
      case "Employee":
        return (<>
        <NewGoalHeader steps={this.state.steps} currentStep={this.state.currentStep}/>
        <NextButton onClick={() => this.updateSteps(null, "Specific")} step={this.state.currentStep}/>
        <EmpList />
        </>)
      case "Specific":
      return (<>
        <NewGoalHeader steps={this.state.steps} currentStep={this.state.currentStep}/>
        <NextButton onClick={() => this.updateSteps("Specific", "Measureable")}/>
        <Specific />
      </>)
      case "Measureable":
        return (<>
        <NewGoalHeader steps={this.state.steps} currentStep={this.state.currentStep}/>
        <NextButton onClick={() => this.updateSteps("Measureable", "Action")} />
        <Measurable />
        </>)
      case "Action":
        return (<>
        <NewGoalHeader steps={this.state.steps} currentStep={this.state.currentStep}/>
        <NextButton onClick={() => this.updateSteps("Action", "Relevant")}/>
        <Actions />
        </>)
      case "Relevant":
        return (<>
        <NewGoalHeader steps={this.state.steps} currentStep={this.state.currentStep}/>
        <NextButton onClick={() => this.updateSteps("Relevant", "Time")}/>
        <Relevant />
        </>)
      case "Time":
        return (<>
        <NewGoalHeader steps={this.state.steps} currentStep={this.state.currentStep}/>
        <NextButton onClick={() => this.updateSteps("Time", "Confirm")} />
        <Time />
        </>)
      case "Confirm":
      return (<>
        <NewGoalHeader steps={this.state.steps} currentStep={this.state.currentStep}/>
        <Complete />
        </>)
      default: 
        return <EmpList />
    }
  }

  render() {
    return(
      <div>
        <div className="container">
          {this.handleWizard()}
        </div>
      </div>
    )
  }
};

export default NewGoal;