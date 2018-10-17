const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  employeeID:     { type: Number },
  firstName:      { type: String, 
                    required: true },
  lastName:       { type: String, 
                    required: true },
  position:       { type: String },
  supervisor:     { type: String },
  homeAddress: {
    type: Schema.Types.ObjectId,
    ref: "HomeAddress"
  }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;