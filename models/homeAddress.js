const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homeAddressSchema = new Schema({
  employeeID: { type: Number},
  streetOne:  { type: String },
  streetTwo:  { type: String },
  city:       { type: String },
  state:      { type: String },
  zip:        { type: Number },
  country:    { type: String },
});

const HomeAdress = mongoose.model("HomeAddress", homeAddressSchema);

module.exports = HomeAdress;