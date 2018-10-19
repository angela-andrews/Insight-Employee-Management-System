const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const educationSchema = new Schema({
  employeeID: { type: Number},
  schoolName: { type: String },
  degree:     { type: String },
  startDate:  { type: Number },
  endDate:    { type: Number },
  bullet1:    { type: String },
  bullet2:    { type: String },
});

const Education = mongoose.model("Education", educationSchema);

module.exports = Education;