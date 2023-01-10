const accountantsModel = require("../models/accountants.model");

const accountantsController = {
  createaccountant: async (req, res) => {
    const doc = new accountantsModel(req.body);
    await doc.save((err, data) => {
      console.log(err, data);
      if (err) {
        res.status(400).json({ status: "error trying to create accountant" });
      } else {
        res.status(200).json({ status: "accountant added successfully", data });
      }
    });
  },

  updateaccountant: async (req, res) => {
    accountantsModel.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, data) => {
      console.log(err, data);
      if (err) {
        res.status(400).json({ status: "accountant not updated successfully" });
      } else {
        res.status(200).json({ status: "accountant updated successfully", data });
      }
    });

    // userGroupModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, data) => {
    //   if (err) {
    //     res.status(400).json({ status: "usergroup not updated successfully" });
    //   } else {
    //     res.status(200).json({ status: "usergroup updated successfully", data });
    //   }
    // });
  },

  getallaccountant: async (req, res) => {
    accountantsModel.find((err, data) => {
      if (err) {
        res.status(400).json({ status: "accountant not found" });
      } else {
        res.status(200).json({ status: "accountant gotten succesfully", data });
      }
    });
  },
  getaccountantByuserId: async (req, res) => {
    accountantsModel.findById(req.params.id, (err, data) => {
      if (err) {
        res.status(400).json({ status: "accountant not found by user id" });
      } else {
        res
          .status(200)
          .json({ status: "accountant gotten by user id successfully", data });
      }
    });
  },
  deleteaccountant: async (req, res) => {
    accountantsModel.findByIdAndDelete(req.params.id, (err, data) => {
      if (err) {
        res.status(400).json({ status: "accountant not deleted" });
      } else {
        res.status(200).json({ status: "accountant successfully deleted", data });
      }
    });
  },
};

module.exports = accountantsController;
