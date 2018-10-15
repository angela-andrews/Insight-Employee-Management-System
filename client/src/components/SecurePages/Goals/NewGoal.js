import React from 'react';
import Navbar from '../../Elements/Navbar'
import Menu from '../../Elements/Menu'
import NewGoalHeader from './NewGoalHeader';
import EmpList from  './EmpList';
import Specific from './Specific';
import Measurable from './Measurable';
import Actions from './Actions';
import Relevant from './Relevant';
import Time from './Time';
import Complete from './Complete';

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
    this.setState({ steps : updated, currentStep: nextStep})
  };
  

  handleWizard() {
    switch (this.state.currentStep) {
      case "Employee":
        return (<>
        <NewGoalHeader steps={this.state.steps}/>
        <EmpList 
          type="submit"
          className="btn btn-primary"
          onClick={() => this.updateSteps(null, "Specific")}
        />
        </>)
      case "Specific":
      return (<>
        <NewGoalHeader steps={this.state.steps}/>
        <Specific 
          type="submit"
          className="btn btn-primary"
          onClick={() => this.updateSteps("Specific", "Measureable")}
        />
      </>)
      case "Measureable":
        return (<>
        <NewGoalHeader steps={this.state.steps}/>
        <Measurable
          type="submit"
          className="btn btn-primary"
          onClick={() => this.updateSteps("Measureable", "Action")}
        />
        </>)
      case "Action":
        return (<>
        <NewGoalHeader steps={this.state.steps}/>
        <Actions
          type="submit"
          className="btn btn-primary"
          onClick={() => this.updateSteps("Action", "Relevant")}
        />
        </>)
      case "Relevant":
        return (<>
        <NewGoalHeader steps={this.state.steps}/>
        <Relevant 
          type="submit"
          className="btn btn-primary"
          onClick={() => this.updateSteps("Relevant", "Time")}
        />
        </>)
      case "Time":
        return (<>
        <NewGoalHeader steps={this.state.steps}/>
        <Time 
          type="submit"
          className="btn btn-primary"
          onClick={() => this.updateSteps("Time", "Confirm")}
        />
        </>)
      case "Confirm":
      return (<>
        <NewGoalHeader steps={this.state.steps}/>
        <Complete />;
        </>)
      default: 
        return <EmpList />;
    }
  }

  render() {
    return(
      <div>
        <Navbar
          imageSrc={"../images/mycompany.png"}
          imageAlt={"My Company Logo"}
          navLinks={["home", "profile", "signout"]}
          signIn={false}
          userName={"Dan"}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <Menu />
            </div>
            <div className="col-sm-10">
              {this.handleWizard()}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default NewGoal;