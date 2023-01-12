const usersModel = require("../models/users.model");

const usersController = {
  createuser: async (req, res) => {
    const doc = new usersModel(req.body);
    await doc.save((err, data) => {
      console.log(err, data);
      if (err) {
        res.status(400).json({ status: "error trying to create user" });
      } else {
        res.status(200).json({ status: "user added successfully", data });
      }
    });
  },

  updateuser: async (req, res) => {
    usersModel.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, data) => {
      console.log(err, data);
      if (err) {
        res.status(400).json({ status: "user not updated successfully" });
      } else {
        res.status(200).json({ status: "user updated successfully", data });
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

  getalluser: async (req, res) => {
    usersModel.find((err, data) => {
      if (err) {
        res.status(400).json({ status: "user not found" });
      } else {
        res.status(200).json({ status: "user gotten succesfully", data });
      }
    });
  },
  getuserByuserId: async (req, res) => {
    usersModel.findById(req.params.id, (err, data) => {
      if (err) {
        res.status(400).json({ status: "user not found by user id" });
      } else {
        res
          .status(200)
          .json({ status: "user gotten by user id successfully", data });
      }
    });
  },
  deleteuser: async (req, res) => {
    usersModel.findByIdAndDelete(req.params.id, (err, data) => {
      if (err) {
        res.status(400).json({ status: "user not deleted" });
      } else {
        res.status(200).json({ status: "user successfully deleted", data });
      }
    });
  },
};

module.exports = usersController;
