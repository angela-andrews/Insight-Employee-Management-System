import React from 'react';
import Navbar from '../Elements/Navbar';
import Menu from '../Elements/Menu'
import ReactTable from "react-table";
import 'react-table/react-table.css'
const data = [{
    fName: 'Angela',
    lName: "Andrews",
    goals: "Incresed closed call rate",
    goalStarted: "10/11/18",
    goalDue: "11/1/18",
    qualityScore: 4.4  
},
{
    fName: 'Angela',
    lName: "Andrews",
    goals: "Reduced number of open tickets",
    goalStarted: "10/11/18",
    goalDue: "11/1/18",
    qualityScore: 4.0  
    
},
{
    fName: 'Sergio',
    lName: "Valente",
    goals: "Incresed closed call rate",
    goalStarted: "10/11/18",
    goalDue: "11/1/18",
    qualityScore: 3.9 
},
{
    fName: 'Angela',
    lName: "Andrews",
    goals: "Reduced number of open tickets",
    goalStarted: "10/11/18",
    goalDue: "11/1/18",
    qualityScore: 4.4  
    
}
] 

const columns = [
              
{Header : 'Name',
    accessor: 'lname, fname'
  }, 
  {Header: 'Goals',
  accessor: 'goals'

  },
  {Header: 'Start Date',
  accessor: 'goalStarted'

  },
  {Header: 'Due Date',
  accessor: 'goalDue'

  }, 
  {Header: 'Quality Score',
  accessor: 'qualityScore'

  }


]


const GoalsObjectives = () => (
  <div>
    <Navbar
      imageSrc={"../images/mycompany.png"}
      imageAlt={"My Company Logo"}
      navLinks={["home", "profile", "signout"]}
      signIn={false}
      userName={"Angela"}
    />
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2">
          <Menu />
        </div>
        <div className="col-sm-9">
          <ReactTable 
          data= {data}
          column= {columns}


        />
        
        </div>
      </div>
    </div>
  </div>
)

export default GoalsObjectives;