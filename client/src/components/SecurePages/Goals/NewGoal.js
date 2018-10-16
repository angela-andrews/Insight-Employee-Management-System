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
    currentStep: "employee",
  }

  handleWizard() {
    switch (this.state.currentStep) {
      case "employee":
        return (<>
        <NewGoalHeader
        steps={[
          {name: "Specific", value: false},
          {name: "Measurable", value: false},
          {name:"Actionable", value: false},
          {name: "Relevant", value: false},
          {name: "Time-bound", value: false}]}
      />
        <EmpList 
          type="submit"
          className="btn btn-primary"
          onClick={() => this.setState({ currentStep: "specific", })}
        />
        </>)
      case "specific":
      return (<>
        <NewGoalHeader
        steps={[
          {name: "Specific", value: false},
          {name: "Measurable", value: false},
          {name:"Actionable", value: false},
          {name: "Relevant", value: false},
          {name: "Time-bound", value: false}]}
      />
        <Specific 
          type="submit"
          className="btn btn-primary"
          onClick={() => this.setState({ currentStep: "measureable", })}
        />
        </>)
      case "measureable":
        return (<>
        <NewGoalHeader
        steps={[
          {name: "Specific", value: true},
          {name: "Measurable", value: false},
          {name:"Actionable", value: false},
          {name: "Relevant", value: false},
          {name: "Time-bound", value: false}]}
      />
        <Measurable
          type="submit"
          className="btn btn-primary"
          onClick={() => this.setState({ currentStep: "action" })}
        />
        </>)
      case "action":
        return (<>
        <NewGoalHeader
        steps={[
          {name: "Specific", value: true},
          {name: "Measurable", value: true},
          {name:"Actionable", value: false},
          {name: "Relevant", value: false},
          {name: "Time-bound", value: false}]}
      />
        <Actions
          type="submit"
          className="btn btn-primary"
          onClick={() => this.setState({ currentStep: "relevant" })}
        />
        </>)
      case "relevant":
        return (<>
        <NewGoalHeader
        steps={[
          {name: "Specific", value: true},
          {name: "Measurable", value: true},
          {name:"Actionable", value: true},
          {name: "Relevant", value: false},
          {name: "Time-bound", value: false}]}
      />
        <Relevant 
          type="submit"
          className="btn btn-primary"
          onClick={() => this.setState({ currentStep: "time" })}
        />
        </>)
      case "time":
        return (<>
        <NewGoalHeader
        steps={[
          {name: "Specific", value: true},
          {name: "Measurable", value: true},
          {name:"Actionable", value: true},
          {name: "Relevant", value: true},
          {name: "Time-bound", value: false}]}
      />
        <Time 
          type="submit"
          className="btn btn-primary"
          onClick={() => this.setState({ currentStep: "confirm" })}
        />
        </>)
      case "confirm":
      return (<>
        <NewGoalHeader
        steps={[
          {name: "Specific", value: true},
          {name: "Measurable", value: true},
          {name:"Actionable", value: true},
          {name: "Relevant", value: true},
          {name: "Time-bound", value: true}]}
        /> 
        <Complete />;
        </>)
      default: 
        return <EmpList />;
    }
  }

  render() {
    return(
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              {this.handleWizard()}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default NewGoal;