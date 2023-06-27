const express = require("express");

const { infoController } = require("../../controllers");
const bookingRoutes = require("./booking");

const router = express.Router();

router.get("/info", infoController.info);

router.use("/booking", bookingRoutes);

module.exports = router;
