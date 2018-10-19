const mongoose = require("mongoose");
// Model Includes
const employee = require('../models/employee');
const homeAddress = require('../models/homeAddress');
const workAddress = require('../models/workAddress');
const positionSummary = require('../models/positionSummary');
const personalSummary = require("../models/personalSummary");
// Seed File Includes
const employeeSeed  = require('./employeeSeed');
const homeAddressSeed = require('./homeAddressSeed');
const personalSummarySeed = require('./personalSummarySeed');
const positionSummarySeed = require('./positionSummarySeed');
const workAddressSeed = require('./workAddressSeed');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://insight_user:k5O^4#Lv@ds031847.mlab.com:31847/insight_db', { useNewUrlParser: true });

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