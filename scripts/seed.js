const mongoose = require("mongoose");
const employee = require('../models/employee');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://insight_user:k5O^4#Lv@ds031847.mlab.com:31847/insight_db', { useNewUrlParser: true });

const employeeSeed = [
  {
    empID: 1,
    firstName: "Leanne",
    lastName: "Graham",
    homeStreetOne: "Kulas Light",
    homeStreetTwo: "Apt. 556",
    homeCity: "Gwenborough",
    homeState: "PA",
    homeZip: 12345,
    homeCountry: "USA"
  },
  {
    empID: 2,
    firstName: "Ervin",
    lastName: "Howell",
    homeStreetOne: "Victor Plains",
    homeStreetTwo: "Suite 879",
    homeCity: "Wisokyburgh",
    homeState: "NJ",
    homeZip: 67890,
    homeCountry: "USA"
  },
  {
    empID: 3,
    firstName: "Clementine",
    lastName: "Bauch",
    homeStreetOne: "Douglas Extension",
    homeStreetTwo: "Suite 847",
    homeCity: "McKenziehaven",
    homeState: "MD",
    homeZip: 13579,
    homeCountry: "USA"
  },
  {
    empID: 4,
    firstName: "Patricia",
    lastName: "Lebsack",
    homeStreetOne: "Hoeger Mall",
    homeStreetTwo: "Apt. 692",
    homeCity: "South Elvis",
    homeState: "CA",
    homeZip: 24681,
    homeCountry: "USA"
  },
  {
    empID: 5,
    firstName: "Chelsey",
    lastName: "Dietrich",
    homeStreetOne: "Skiles Walks",
    homeStreetTwo: "Suite 351",
    homeCity: "Roscoeview",
    homeState: "VT",
    homeZip: 12457,
    homeCountry: "TN"
  },
];

employee
  .deleteMany()
  .then(() => employee.collection.insertMany(employeeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });