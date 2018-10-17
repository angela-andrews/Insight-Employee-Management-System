const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const positionSummarySchema = new Schema({
  employeeID: { type: Number },
  deptName:   { type: String },
  jobTitle:   { type: String },
  startDate:  { type: String   },
  endDate:    { type: String   },
  timeType:   { type: String },
  posType:    { type: String },
});

const PositionSummary = mongoose.model("PositionSummary", positionSummarySchema);

module.exports = PositionSummary;