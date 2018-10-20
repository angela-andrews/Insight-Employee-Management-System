const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const certificateSchema = new Schema({
  employeeID:   { type: Number},
  schoolName:   { type: String },
  certificate:  { type: String },
  date:         { type: String },
  bullet1:      { type: String },
  bullet2:      { type: String },
});

const Certificate = mongoose.model("Certificate", certificateSchema);

module.exports = Certificate;