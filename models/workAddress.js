const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workAddressSchema = new Schema({
  employeeID: { type: Number},
  streetOne:  { type: String },
  streetTwo:  { type: String },
  city:       { type: String },
  state:      { type: String },
  zip:        { type: Number },
  country:    { type: String },
});

const WorkAdress = mongoose.model("WorkAddress", workAddressSchema);

module.exports = WorkAdress;