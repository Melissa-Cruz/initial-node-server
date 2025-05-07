const express = require("express");
const router = express.Router();

const { getAllBooks, getBook } = require("../controllers/booksControllers");

//All routes start with "/api/books/"
router.get("/", getAllBooks);

router.get("/:_id", getBook);

router.post("/create/new", createBook);

router.put("/update/:_id", updateBook);

router.delete("/delete/:_id", deleteBook);


module.exports = router;