const insightsModel = require("../models/insights.model");

const insightsController = {
  createinsights: async (req, res) => {
    const doc = new insightsModel(req.body);
    await doc.save((err, data) => {
      console.log(err, data);
      if (err) {
        res.status(400).json({ status: "error trying to create insight" });
      } else {
        res.status(200).json({ status: "insight added successfully", data });
      }
    });
  },

  updateinsights: async (req, res) => {
    insightsModel.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, data) => {
      if (err) {
        res.status(400).json({ status: "insight not updated successfully" });
      } else {
        res.status(200).json({ status: "insight updated successfully", data });
      }
    });
  },

  getallinsights: async (req, res) => {
    insightsModel.find((err, data) => {
      if (err) {
        res.status(400).json({ status: "insight not found" });
      } else {
        res.status(200).json({ status: "insight gotten succesfully", data });
      }
    });
  },
  getinsightsByuserId: async (req, res) => {
    insightsModel.findById(req.params.id, (err, data) => {
      if (err) {
        res.status(400).json({ status: "insight not found by user id" });
      } else {
        res
          .status(200)
          .json({ status: "insight gotten by user id successfully", data });
      }
    });
  },
  deleteinsights: async (req, res) => {
    insightsModel.findByIdAndDelete(req.params.id, (err, data) => {
      if (err) {
        res.status(400).json({ status: "insight not deleted" });
      } else {
        res.status(200).json({ status: "insight successfully deleted", data });
      }
    });
  },
};

module.exports = insightsController;
