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
import Bam from './Bam';

class NewGoal extends React.Component {

  state = {
    currentStep: "employee"
  }

  handleWizard() {
    switch (this.state.currentStep) {
      case "employee":
        return <EmpList 
          type="submit"
          className="btn btn-primary"
          onClick={() => this.setState({ currentStep: "specific" })}
        />
      case "specific":
        return <Specific 
          type="submit"
          className="btn btn-primary"
          onClick={() => this.setState({ currentStep: "measureable" })}
        />
      case "measureable":
        return <Measurable
          type="submit"
          className="btn btn-primary"
          onClick={() => this.setState({ currentStep: "action" })}
        />
      case "action":
        return <Actions
          type="submit"
          className="btn btn-primary"
          onClick={() => this.setState({ currentStep: "relevant" })}
        />
      case "relevant":
        return <Relevant 
          type="submit"
          className="btn btn-primary"
          onClick={() => this.setState({ currentStep: "time" })}
        />
      case "time":
        return <Time 
          type="submit"
          className="btn btn-primary"
          onClick={() => this.setState({ currentStep: "confirm" })}
        />
      case "confirm":
        return <Bam />;
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
              <NewGoalHeader />
              {this.handleWizard()}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default NewGoal;