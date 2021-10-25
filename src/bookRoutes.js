const router = require('express').Router();
const bookRepository = require("./bookRepository");
const bookService = require("./bookService")(bookRepository);
const controller = require("./bookController")({bookService, bookRepository});
const validateBook = require("./validateBookMiddleware");

router.post("/book", validateBook,  controller.createOrUpdate);
router.get("/book/:isbn", controller.details);
router.get("/book", controller.getList);

module.exports = router;