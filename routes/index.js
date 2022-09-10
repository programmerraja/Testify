const router = require("express").Router();
const uploader = require("./uploader");

router.use("/uploader", uploader);

module.exports = router;
