//require express
const express = require("express");

//initialize express.router 
const router = express.Router();

//summon all the controller 
const { getAllAuthors, getAuthor,} = require("../controllers/authorsControllers")

router.get("/", getAllAuthors);
router.get("/:_id", getAuthor);


router.post("/create/new", createAuthor);

router.put("/update/:_id", updateAuthor);

router.delete("/delete/:_id", deleteAuthor);

module.exports = router;