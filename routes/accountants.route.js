const express = require("express");
const router = express.Router();
const accountantsController = require("../controllers/accountants.controller");


router.post("/createaccountant", accountantsController.createaccountant);
router.get("/getallaccountant", accountantsController.getallaccountant);
router.get("/getaccountantByusersId/:id", accountantsController.getaccountantByuserId);
router.put("/updateaccountant/:id", accountantsController.updateaccountant);
router.delete("/deleteaccountant/:id", accountantsController.deleteaccountant);


module.exports = router;