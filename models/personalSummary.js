const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personalSummarySchema = new Schema({
  employeeID: { type: Number },
  title:      { type: String },
  middleName: { type: String },
  dob:        { type : String },
  gender:     { type : String }
});

const PersonalSummary = mongoose.model("PersonalSummary", personalSummarySchema);

module.exports = PersonalSummary;