const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const insightsSchema = new Schema(
  {
    Status: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

const insights = mongoose.model("insights", insightsSchema);

module.exports = insights;