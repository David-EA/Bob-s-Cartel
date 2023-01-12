const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");


router.post("/createuser", usersController.createuser);
router.get("/getallusers", usersController.getalluser);
router.get("/getuserByusersId/:id", usersController.getuserByuserId);
router.put("/updateuser/:id", usersController.updateuser);
router.delete("/deleteuser/:id", usersController.deleteuser);


module.exports = router;