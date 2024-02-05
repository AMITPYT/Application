const express = require("express");
const { applicationRouters } = require("../Modules/Application/routes");
const router = express.Router();

router.use(applicationRouters)

module.exports = router;