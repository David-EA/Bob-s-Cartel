const express = require("express");
const router = express.Router();
const thriftsController = require("../controllers/thrifts.controller");


router.post("/createthrift", thriftsController.createthrift);
router.get("/getallthrift", thriftsController.getallthrift);
router.get("/getthriftByuserId/:id", thriftsController.getthriftByuserId);
router.put("/updatethrift/:id", thriftsController.updatethrift);
router.delete("/deletethrift/:id", thriftsController.deletethrift);


module.exports = router;