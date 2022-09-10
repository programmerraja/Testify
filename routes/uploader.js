const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController.js");


router.post("/",uploadController.uploader);

module.exports = router;
