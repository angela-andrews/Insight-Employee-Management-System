const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const awardSchema = new Schema({
  employeeID:   { type: Number},
  type:         { type: String },
  date:         { type: String },
  dollarAmount: { type: String },
  reason:       { type: String },
  status:       { type: String },
});

const Award = mongoose.model("Award", awardSchema);

module.exports = Award;