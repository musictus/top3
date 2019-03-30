const router = require("express").Router();
const yelpController = require("../../controllers/yelpController");

router
  .route("/:restaurant")
  .get(yelpController.loadYelp)



module.exports = router;