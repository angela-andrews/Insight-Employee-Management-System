const mongoose = require("mongoose");
// Model Includes
const employee = require('../models/employee');
const homeAddress = require('../models/homeAddress');
const workAddress = require('../models/workAddress');
const positionSummary = require('../models/positionSummary');
const personalSummary = require("../models/personalSummary");
const workHistory = require("../models/workHistory");
const education = require('../models/education');
const award = require('../models/award');
const certificate = require('../models/certificate');
// Seed File Includes
const employeeSeed  = require('./employeeSeed');
const homeAddressSeed = require('./homeAddressSeed');
const personalSummarySeed = require('./personalSummarySeed');
const positionSummarySeed = require('./positionSummarySeed');
const workAddressSeed = require('./workAddressSeed');
const workHistorySeed = require('./workHistorySeed');
const educationSeed = require('./educationSeed');
const awardSeed = require('./awardSeed');
const certificateSeed = require('./certificateSeed');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://insight_user:k5O^4#Lv@ds031847.mlab.com:31847/insight_db', { useNewUrlParser: true });
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

const updateDB = async () => {
  try {
    console.log((`
    ******************************
     Starting to Drop Collections
    ******************************
    `))
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
    console.log(await homeSeedLoad());
    console.log(await workSeedLoad());
    console.log(await positionSeedLoad());
    console.log(await personalSeedLoad());
    console.log(await workHistorySeedLoad());
    console.log(await educationSeedLoad());
    console.log(await awardSeedLoad());
    console.log(await certificateSeedLoad());
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
}
/*
*** *** *** *** *** *** Drop Collection Functions *** *** *** *** *** ***
*/
const dropModel = async () => {
  return new Promise((resolve,reject) => {
    dbNames = [employee, homeAddress, workAddress, positionSummary, personalSummary, workHistory, education, award]
    let dropCollectionPromises = [];
    dbNames.forEach(element => {
      dropCollectionPromises.push(dropCollection(element))
    });
    Promise.all(dropCollectionPromises)
    .then(() => {
      resolve(`
      ******************************
          All Collections Dropped
      ******************************
      `);
    })
    .catch(err => reject(err));
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
    employee.collection.insertMany(employeeSeed)
      .then(data => resolve(`${data.result.n} Employee Records Inserted`))
      .catch(err => reject(err))
  });
};
/*
*** *** *** *** *** *** Employee Address Load Functions *** *** *** *** *** ***
*/
const homeSeedLoad = async () => {
  return new Promise((resolve, reject) => {
    let seedPromises = [];
    homeAddressSeed.forEach(element => {
      seedPromises.push(homeSeedDB(element));
    });
    Promise.all(seedPromises)
    .then(() => {
      resolve(`
      ******************************
      Home Address Collection Seeded
      ******************************
      `);
    })
    .catch(err => reject(err));
  });
};
const homeSeedDB = element => {
  return new Promise((resolve, reject) => {
    new homeAddress(element).save()
    .then(response => {
      return employee.findOneAndUpdate({ employeeID: response.employeeID}, {homeAddress: response._id}, {new: true})
    })
    .then(response => {
      return (response);
    })
    .then(response => {
      console.log(`Home Address Record Inserted`)
      resolve(response);
    })
    .catch(err => reject(err));
  });
};
/*
*** *** *** *** *** *** Work Address Load Functions *** *** *** *** *** ***
*/
const workSeedLoad = async () => {
  return new Promise((resolve, reject) => {
    let seedPromises = [];
    workAddressSeed.forEach(element => {
      seedPromises.push(workSeedDB(element));
    });
    Promise.all(seedPromises)
    .then(() => {
      resolve(`
      ******************************
      Work Address Collection Seeded
      ******************************
      `);
    })
    .catch(err => reject(err));
  });
};
const workSeedDB = element => {
  return new Promise((resolve, reject) => {
    new workAddress(element).save()
    .then(response => {
      return employee.findOneAndUpdate({ employeeID: response.employeeID}, {workAddress: response._id}, {new: true})
    })
    .then(response => {
      return (response);
    })
    .then(response => {
      console.log(`Work Address Record Inserted`)
      resolve(response);
    })
    .catch(err => reject(err));
  });
};
/*
*** *** *** *** *** *** Position Summary Load Functions *** *** *** *** *** ***
*/
const positionSeedLoad = async () => {
  return new Promise((resolve, reject) => {
    let seedPromises = [];
    positionSummarySeed.forEach(element => {
      seedPromises.push(positionSeedDB(element));
    });
    Promise.all(seedPromises)
    .then(() => {
      resolve(`
      **********************************
      Position Summary Collection Seeded
      **********************************
      `);
    })
    .catch(err => reject(err));
  });
};
const positionSeedDB = element => {
  return new Promise((resolve, reject) => {
    new positionSummary(element).save()
    .then(response => {
      return employee.findOneAndUpdate({ employeeID: response.employeeID}, {positionSummary: response._id}, {new: true})
    })
    .then(response => {
      return (response);
    })
    .then(response => {
      console.log(`Position Summary Record Inserted`)
      resolve(response);
    })
    .catch(err => reject(err));
  });
};
/*
*** *** *** *** *** *** Personal Summary Load Functions *** *** *** *** *** ***
*/
const personalSeedLoad = async () => {
  return new Promise((resolve, reject) => {
    let seedPromises = [];
    personalSummarySeed.forEach(element => {
      seedPromises.push(personalSeedDB(element));
    });
    Promise.all(seedPromises)
    .then(() => {
      resolve(`
      **********************************
      Personal Summary Collection Seeded
      **********************************
      `);
    })
    .catch(err => reject(err));
  });
};
const personalSeedDB = element => {
  return new Promise((resolve, reject) => {
    new personalSummary(element).save()
    .then(response => {
      return employee.findOneAndUpdate({ employeeID: response.employeeID}, {personalSummary: response._id}, {new: true})
    })
    .then(response => {
      return (response);
    })
    .then(response => {
      console.log(`Personal Summary Record Inserted`)
      resolve(response);
    })
    .catch(err => reject(err));
  });
};
/*
*** *** *** *** *** *** Work History Load Functions *** *** *** *** *** ***
*/
const workHistorySeedLoad = async () => {
  return new Promise((resolve, reject) => {
    let seedPromises = [];
    workHistorySeed.forEach(element => {
      seedPromises.push(workHistorySeedDB(element));
    });
    Promise.all(seedPromises)
    .then(() => {
      resolve(`
      **********************************
       Work History Collection Seeded
      **********************************
      `);
    })
    .catch(err => reject(err));
  });
};
const workHistorySeedDB = element => {
  return new Promise((resolve, reject) => {
    new workHistory(element).save()
    .then(response => {
      return employee.findOneAndUpdate({ employeeID: response.employeeID}, {$push: {workHistory: response._id}}, {new: true})
    })
    .then(response => {
      return (response);
    })
    .then(response => {
      console.log(`Work History Record Inserted`)
      resolve(response);
    })
    .catch(err => reject(err));
  });
};
/*
*** *** *** *** *** *** Education Load Functions *** *** *** *** *** ***
*/
const educationSeedLoad = async () => {
  return new Promise((resolve, reject) => {
    let seedPromises = [];
    educationSeed.forEach(element => {
      seedPromises.push(educationSeedDB(element));
    });
    Promise.all(seedPromises)
    .then(() => {
      resolve(`
      **********************************
        Education Collection Seeded
      **********************************
      `);
    })
    .catch(err => reject(err));
  });
};
const educationSeedDB = element => {
  return new Promise((resolve, reject) => {
    new education(element).save()
    .then(response => {
      return employee.findOneAndUpdate({ employeeID: response.employeeID}, {$push: {education: response._id}}, {new: true})
    })
    .then(response => {
      return (response);
    })
    .then(response => {
      console.log(`Education Record Inserted`)
      resolve(response);
    })
    .catch(err => reject(err));
  });
};
/*
*** *** *** *** *** *** Award Load Functions *** *** *** *** *** ***
*/
const awardSeedLoad = async () => {
  return new Promise((resolve, reject) => {
    let seedPromises = [];
    awardSeed.forEach(element => {
      seedPromises.push(awardSeedDB(element));
    });
    Promise.all(seedPromises)
    .then(() => {
      resolve(`
      **********************************
        Award Collection Seeded
      **********************************
      `);
    })
    .catch(err => reject(err));
  });
};
const awardSeedDB = element => {
  return new Promise((resolve, reject) => {
    new award(element).save()
    .then(response => {
      return employee.findOneAndUpdate({ employeeID: response.employeeID}, {$push: {award: response._id}}, {new: true})
    })
    .then(response => {
      return (response);
    })
    .then(response => {
      console.log(`Award Record Inserted`)
      resolve(response);
    })
    .catch(err => reject(err));
  });
};
/*
*** *** *** *** *** *** Certificate Load Functions *** *** *** *** *** ***
*/
const certificateSeedLoad = async () => {
  return new Promise((resolve, reject) => {
    let seedPromises = [];
    certificateSeed.forEach(element => {
      seedPromises.push(certificateSeedDB(element));
    });
    Promise.all(seedPromises)
    .then(() => {
      resolve(`
      **********************************
        Certificate Collection Seeded
      **********************************
      `);
    })
    .catch(err => reject(err));
  });
};
const certificateSeedDB = element => {
  return new Promise((resolve, reject) => {
    new certificate(element).save()
    .then(response => {
      return employee.findOneAndUpdate({ employeeID: response.employeeID}, {$push: {certificate: response._id}}, {new: true})
    })
    .then(response => {
      return (response);
    })
    .then(response => {
      console.log(`Certificate Record Inserted`)
      resolve(response);
    })
    .catch(err => reject(err));
  });
};
/*
*** *** *** *** *** *** Update the Database Call *** *** *** *** *** ***
*/
updateDB();