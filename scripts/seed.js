const mongoose = require("mongoose");
// Model Include
const dbModel = require("../models");
// Seed File Include
const seed = require("./seedFiles");
// Connect to MongoDB 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://insight_user:k5O^4#Lv@ds031847.mlab.com:31847/insight_db', { useNewUrlParser: true });
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);
/*
*** *** *** *** *** *** Update DB Functions *** *** *** *** *** ***
*/
const updateDB = async () => {
  try {
    console.log(`
    ******************************
     Starting to Drop Collections
    ******************************
    `)
    console.log(await dropModel());
    console.log(`
    ******************************
      Starting to Seed Employees
    ******************************
    `)
    console.log(await employeeLoad());
    console.log(`
    ******************************
      Employee Collection Seeded
    ******************************
    `)
    console.log(`
    *******************************
     Starting to Seed Collections 
    *******************************
    `)
    console.log(await seedDBOne(seed.homeAddressSeed, dbModel.homeAddress, "homeAddress", false));
    console.log(await seedDBOne(seed.workAddressSeed, dbModel.workAddress, "workAddress", false));
    console.log(await seedDBOne(seed.positionSummarySeed, dbModel.positionSummary, "positionSummary", false));
    console.log(await seedDBOne(seed.personalSummarySeed, dbModel.personalSummary, "personalSummary", false));
    console.log(await seedDBOne(seed.workHistorySeed, dbModel.workHistory, "workHistory", true))
    console.log(await seedDBOne(seed.educationSeed, dbModel.education, "education", true))
    console.log(await seedDBOne(seed.awardSeed, dbModel.award, "award", true))
    console.log(await seedDBOne(seed.certificateSeed, dbModel.certificate, "certificate", true))
    console.log(await seedDBOne(seed.skillSeed, dbModel.skill, "skill", true))
    console.log(`
    *******************************
     All Collections Seeded!
    *******************************
    `)
    process.exit(0);
  } catch(err) {
    console.log(err)
    process.exit(1);
  }
};
/*
*** *** *** *** *** *** Drop Collection Functions *** *** *** *** *** ***
*/
const dropModel = async () => {
  return new Promise((resolve,reject) => {
    dbNames = [dbModel.employee,
              dbModel.homeAddress, 
              dbModel.workAddress, 
              dbModel.positionSummary, 
              dbModel.personalSummary,
              dbModel.workHistory, 
              dbModel.education, 
              dbModel.award, 
              dbModel.certificate, 
              dbModel.skill]
    let dropCollectionPromises = [];
    dbNames.forEach(element => dropCollectionPromises.push(dropCollection(element)));
    Promise.all(dropCollectionPromises)
    .then(() => resolve(`
      ******************************
          All Collections Dropped
      ******************************
    `)
    ).catch(err => reject(err));
  });
};
const dropCollection = model => {
  return new Promise(resolve => {
    model.deleteMany()
    .then(response => {
      console.log(`${response.n} Records Droped from ${model.modelName} Model`)
      resolve(response)
    }) 
    .catch(err => console.log(err));
  });
};
/*
*** *** *** *** *** *** Employee Load Functions *** *** *** *** *** ***
*/
const employeeLoad = () => {
  return new Promise((resolve, reject) => {
    dbModel.employee.collection.insertMany(employeeSeed)
      .then(data => resolve(`${data.result.n} Employee Records Inserted`))
      .catch(err => reject(err))
  });
};
/*
*** *** *** *** *** *** Seed File Load Functions *** *** *** *** *** ***
*/
const seedDBOne = async (seedFile, model, updateField, push) => {
  return new Promise((resolve, reject) => {
    let seedPromises = [];
    seedFile.forEach(element => seedPromises.push(seedDBTwo(element, model, updateField, push)));
    Promise.all(seedPromises)
    .then(() => {
      resolve(`
      ******************************
      ${updateField} Collection Seeded
      ******************************
      `);
      seedPromises = [];
    })
    .catch(err => reject(err));
  });
};
const seedDBTwo = (element, model, updateField, push) => {
  return new Promise((resolve, reject) => {
    new model(element).save()
    .then(response => {
      if(push) {
        return dbModel.employee.findOneAndUpdate({ employeeID: response.employeeID}, {$push: {[updateField]: response._id}}, {new: true})
      }
      return dbModel.employee.findOneAndUpdate({ employeeID: response.employeeID}, {[updateField]: response._id}, {new: true})
    })
    .then(response => {
      return (response);
    })
    .then(response => {
      console.log(`${updateField} Record Inserted`)
      resolve(response);
    })
    .catch(err => reject(err));
  });
};
/*
*** *** *** *** *** *** Update the Database Call *** *** *** *** *** ***
*/
updateDB();