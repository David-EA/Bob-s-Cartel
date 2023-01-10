const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thriftSchema = new Schema(
{
    name: {
        required : true,
        type : String,
    },
    amount: {
        required : true,
        type : Number,
    },
    price: {
        required : true,
        type : Number,
    },
    status: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Status",
      },
},
{ timestamps: true }
);

const thrift = mongoose.model("thrift", thriftSchema);

module.exports = thrift;