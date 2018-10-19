const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workHistorySchema = new Schema({
  employeeID:   { type: Number },
  jobTitle:     { type: String },
  companyName:  { type: String },
  startDate:    { type: String },
  endDate:      { type: String },
  location:     { type: String },
  bullet1:      { type: String },
  bullet2:      { type: String },
  bullet3:      { type: String },
  bullet4:      { type: String }
});

const WorkHistory = mongoose.model("WorkHistory", workHistorySchema);

module.exports = WorkHistory;