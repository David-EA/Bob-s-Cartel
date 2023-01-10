const thriftsModel = require("../models/thrifts.model");

const thriftsController = {
  createthrift: async (req, res) => {
    const doc = new  thriftsModel(req.body);
    await doc.save((err, data) => {
      console.log(err, data);
      if (err) {
        res.status(400).json({ status: "error trying to create thrift" });
      } else {
        res.status(200).json({ status: "thrift added successfully", data });
      }
    });
  },

  updatethrift: async (req, res) => {
    thriftsModel.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, data) => {
      if (err) {
        res.status(400).json({ status: "thrift not updated successfully" });
      } else {
        res.status(200).json({ status: "thrift updated successfully", data });
      }
    });
  },

  getallthrift: async (req, res) => {
    thriftsModel.find((err, data) => {
      if (err) {
        res.status(400).json({ status: "thrift not found" });
      } else {
        res.status(200).json({ status: "thrift gotten succesfully", data });
      }
    });
  },
  getthriftByuserId: async (req, res) => {
    thriftsModel.findById(req.params.id, (err, data) => {
      if (err) {
        res.status(400).json({ status: "thrift not found by user id" });
      } else {
        res
          .status(200)
          .json({ status: "thrift gotten by user id successfully", data });
      }
    });
  },
  deletethrift: async (req, res) => {
    thriftsModel.findById(req.params.id, (err, data) => {
      if (err) {
        res.status(400).json({ status: "thrift not deleted" });
      } else {
        res.status(200).json({ status: "thrift successfully deleted", data });
      }
    });
  },
};

module.exports = thriftsController;
