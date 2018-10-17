const mongoose = require("mongoose");
const employee = require('../models/employee');
const homeAddress = require('../models/homeAddress');
const workAddress = require('../models/workAddress');
const positionSummary = require('../models/positionSummary');
const personalSummary = require("../models/personalSummary");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://insight_user:k5O^4#Lv@ds031847.mlab.com:31847/insight_db', { useNewUrlParser: true });

const employeeSeed = [
  {
    employeeID:     575811,
    firstName:      "Leanne",
    lastName:       "Graham",
    position:       "Technical Support",
    supervisor:     "Mrs. Dennis Schulist"
  },
  {
    employeeID:     927675,
    firstName:      "Ervin",
    lastName:       "Howell",
    position:       "Accountant",
    supervisor:     "Mrs. Dennis Schulist"
  },
  {
    employeeID:     544029,
    firstName:      "Clementine",
    lastName:       "Bauch",
    position:       "Dog Walker",
    supervisor:     "Chelsey Dietrich"
  },
  {
    employeeID:     441186,
    firstName:      "Patricia",
    lastName:       "Lebsack",
    position:       "Developer",
    supervisor:     "Mrs. Dennis Schulist",
  },
  {
    employeeID:     169497,
    firstName:      "Chelsey",
    lastName:       "Dietrich",
    position:       "Office Manager",
    supervisor:     "Mrs. Dennis Schulist",
  },
];

const homeAddressSeed = [
  {
    employeeID: 169497,
    streetOne:  "Skiles Walks",
    streetTwo:  "Suite 351",
    city:       "Roscoeview",
    state:      "VT",
    zip:        12457,
    country:    "TN",
  },
  {
    employeeID: 441186,
    streetOne:  "Hoeger Mall",
    streetTwo:  "Apt. 692",
    city:       "South Elvis",
    state:      "CA",
    zip:        24681,
    country:    "USA",
  },
  {
    employeeID: 544029,
    streetOne:  "Douglas Extension",
    streetTwo:  "Suite 847",
    city:       "McKenziehaven",
    state:      "MD",
    zip:        13579,
    country:    "USA",
  },
  {
    employeeID: 927675,
    streetOne:  "Victor Plains",
    streetTwo:  "Suite 879",
    city:       "Wisokyburgh",
    state:      "NJ",
    zip:        67890,
    country:    "USA",
  },
  {
    employeeID: 575811,
    streetOne:  "Kulas Light",
    streetTwo:  "Apt. 556",
    city:       "Gwenborough",
    state:      "PA",
    zip:        12345,
    country:    "USA",
  }
];

const workAddressSeed = [
  {
    employeeID: 169497,
    streetOne:  "52611 Aberg Hill",
    streetTwo:  "3 Florence Terrrace",
    city:       "Tulsa",
    state:      "OK",
    zip:        74170,
    country:    "TN",
  },
  {
    employeeID: 441186,
    streetOne:  "45737 Crest Line Alley",
    streetTwo:  "39 Illene Drive",
    city:       "Washington",
    state:      "DC",
    zip:        20260,
    country:    "USA",
  },
  {
    employeeID: 544029,
    streetOne:  "0 Hudson Pass",
    streetTwo:  "7 Shasta Trail",
    city:       "Berkeley",
    state:      "CA",
    zip:        94712,
    country:    "USA",
  },
  {
    employeeID: 927675,
    streetOne:  "44806 Sugar Park",
    streetTwo:  "9 Columbus Centter",
    city:       "Oceanside",
    state:      "CA",
    zip:        92056,
    country:    "USA",
  },
  {
    employeeID: 575811,
    streetOne:  "508 Ridgeway Terrace",
    streetTwo:  "798 Kipling Alley",
    city:       "Tyler",
    state:      "TX",
    zip:        75705,
    country:    "USA",
  }
];

const positionSummarySeed = [
  {
    employeeID: 169497,
    deptName:   "Accounting",
    jobTitle:   "Office Assistant III",
    startDate:  "09/14/2012",
    endDate:    "02/05/2015",
    timeType:   "Full-Time",
    posType:    "Regular"
  }, 
  {
    employeeID: 441186,
    deptName:   "Legal",
    jobTitle:   "Assistant Professor",
    startDate:  "10/01/2018",
    endDate:    "12/16/2015",
    timeType:   "Full-Time",
    posType:    "Regular"
  }, 
  {
    employeeID: 544029,
    deptName:   "Sales",
    jobTitle:   "Assistant Manager",
    startDate:  "11/14/2014",
    endDate:    "06/07/2017",
    timeType:   "Part-Time",
    posType:    "Regular"
  }, 
  {
    employeeID: 927675,
    deptName:   "Training",
    jobTitle:   "Teacher",
    startDate:  "04/27/2013",
    endDate:    "03/11/2018",
    timeType:   "Full-Time",
    posType:    "Temporary"
  }, 
  {
    employeeID: 575811,
    deptName:   "Training",
    jobTitle:   "Business Systems Development Analyst",
    startDate:  "10/03/2015",
    endDate:    "06/13/2011",
    timeType:   "Full-Time",
    posType:    "Regular"
  }
];

const personalSummarySeed = [
  {
    employeeID: 169497,
    title:      "Dr",
    middleName: "Mockernut Hickory",
    dob:        "10/26/1989",
    gender:     "Male"
  }, 
  {
    employeeID: 441186,
    title:      "Mrs",
    middleName: "Contra Costa Goldfields",
    dob:        "07/03/1960",
    gender:     "Male"
  }, 
  {
    employeeID: 544029,
    title:      "Ms",
    middleName: "Ducklettuce",
    dob:        "07/05/1992",
    gender:     "Female"
  }, 
  {
    employeeID: 927675,
    title:      "Mr",
    middleName: "Mountain Goldenbanner",
    dob:        "05/25/1961",
    gender:     "Male"
  }, 
  {
    employeeID: 575811,
    title:      "Ms",
    middleName: "Cephalaria",
    dob:        "03/21/1992",
    gender:     "Male"
  }
];

async function updateDB() {
  const employeeLoadIn = await employeeUpdate();
  console.log(employeeLoadIn)
  const addressLoadIn = await addressUpdate();
  console.log(addressLoadIn);
  const workLoadIn = await workUpdate();
  console.log(workLoadIn);
  const positionLoadIn = await positionUpdate();
  console.log(positionLoadIn);
  const personalLoadIn = await personalUpdate();
  console.log(personalLoadIn);
  process.exit(0);
};

function employeeUpdate() {
  return new Promise(resolve => {
    employee
    .deleteMany()
    .then(() => employee.collection.insertMany(employeeSeed))
    .then(data => {
      resolve(data.result.n + " Employee records inserted!");
    })
    .catch(err => {
      console.error(err);
    });
  });
};

function addressUpdate() {
  return new Promise(resolve => {
    homeAddress.collection.drop()
    homeAddressSeed.forEach(address => {
      homeAddress.create(address)
      .then(dbAddress => {
        return employee.findOneAndUpdate({ employeeID: dbAddress.employeeID}, {homeAddress: dbAddress._id}, {new:true})
      })
      .then(dbUpdate => {
        resolve('Home Address Records Inserted');
      });
    });
  });
};

function workUpdate() {
  return new Promise(resolve => {
    workAddress.collection.drop()
    workAddressSeed.forEach(address => {
      workAddress.create(address)
      .then(dbAddress => {
        return employee.findOneAndUpdate({ employeeID: dbAddress.employeeID}, {workAddress: dbAddress._id}, {new:true})
      })
      .then(dbUpdate => {
        resolve('Work Address Records Inserted');
      });
    });
  });
};

function positionUpdate() {
  return new Promise(resolve => {
    positionSummary.collection.drop()
    positionSummarySeed.forEach(position => {
      positionSummary.create(position)
      .then(dbPosition => {
        return employee.findOneAndUpdate({ employeeID: dbPosition.employeeID}, {positionSummary: dbPosition._id}, {new:true})
      })
      .then(dbUpdate => {
        resolve('Position Records Inserted');
      });
    });
  });
};

function personalUpdate() {
  return new Promise(resolve => {
    personalSummary.collection.drop()
    personalSummarySeed.forEach(position => {
      personalSummary.create(position)
      .then(dbPosition => {
        return employee.findOneAndUpdate({ employeeID: dbPosition.employeeID}, {personalSummary: dbPosition._id}, {new:true})
      })
      .then(dbUpdate => {
        resolve('Personal Records Inserted');
      });
    });
  });
};

updateDB();