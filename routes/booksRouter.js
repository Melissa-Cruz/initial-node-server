const express = require("express");
const router = express.Router();

const { getAllBooks, getBook } = require("../controllers/booksControllers");

//All routes start with "/api/books/"
router.get("/", getAllBooks);

router.get("/:_id", getBook);

module.exports = router;