const router = require('express').Router();
const bookRepository = require("./bookRepository");
const bookService = require("./bookService");
const controller = require("./bookController")({bookService, bookRepository});
const validateBook = require("./validateBookMiddleware");

router.post("/book", validateBook,  controller.createOrUpdate);
router.get("/book/:isbn", controller.details);

module.exports = router;