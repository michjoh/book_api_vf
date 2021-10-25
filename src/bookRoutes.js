const router = require('express').Router();
const controller = require("./bookController");
const validateBook = require("./validateBookMiddleware");

router.post("/book", validateBook, controller.createOrUpdate);
router.get("/book/:isbn", controller.details);

module.exports = router;