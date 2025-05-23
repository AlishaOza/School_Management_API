const express = require("express");
const router = express.Router();
const Schoolcontroller = require("../Controller/Schoolcontroller");

router.post("/addSchool", Schoolcontroller.addSchool);
router.get("/listSchools", Schoolcontroller.listSchools);

module.exports = router;
