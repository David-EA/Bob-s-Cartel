const express = require("express");
const router = express.Router();
const insightsController = require("../controllers/insights.controller");


router.post("/createinsights", insightsController.createinsights);
router.get("/getallinsights", insightsController.getallinsights);
router.get("/getinsightsByusersId/:id", insightsController.getinsightsByuserId);
router.put("/updateinsights/:id", insightsController.updateinsights);
router.delete("/deleteinsights/:id", insightsController.deleteinsights);


module.exports = router;