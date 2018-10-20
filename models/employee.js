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
  },
  workAddress: {
    type: Schema.Types.ObjectId,
    ref: "WorkAddress"
  },
  positionSummary: {
    type: Schema.Types.ObjectId,
    ref: "PositionSummary"
  },
  personalSummary: {
    type: Schema.Types.ObjectId,
    ref: "PersonalSummary"
  },
  workHistory: [
    {
    type: Schema.Types.ObjectId,
    ref: "WorkHistory"
    }
  ],
  education: [
    {
    type: Schema.Types.ObjectId,
    ref: "Education"
    }
  ],
  award: [
    {
    type: Schema.Types.ObjectId,
    ref: "Award"
    }
  ],
  certificate: [
    {
    type: Schema.Types.ObjectId,
    ref: "Certificate"
    }
  ],
  skill: [
    {
      type: Schema.Types.ObjectId,
      ref: "Skill"
    }
  ]
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;