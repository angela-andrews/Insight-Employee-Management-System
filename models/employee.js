const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  homeStreetOne: { type: String },
  homeStreetTwo: { type: String },
  homeCity: { type: String },
  homeState: { type: String },
  homeZip: { type: Number },
  homeCountry: {type : String }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;