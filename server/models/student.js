const mongoose = require("mongoose");

const schema = mongoose.schema;

// create model - it's like a table of sql
const studentSchema = new schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
