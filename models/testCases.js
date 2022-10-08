var mongoose = require("mongoose");


const TestCasesSchema = new mongoose.Schema(
  {
    any:  {}
  },
  {strict:false }
);

const TestCases =  mongoose.model("testcase", TestCasesSchema);

module.exports = TestCases;
