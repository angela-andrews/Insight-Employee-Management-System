const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillSchema = new Schema({
  employeeID: { type: Number },
  skill:      { type : String }
});

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;