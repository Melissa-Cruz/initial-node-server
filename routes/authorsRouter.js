//require express
const express = require("express");

//initialize express.router 
const router = express.Router();

//summon all the controller 
const { getAllAuthors, getAuthor,} = require("../controllers/authorsControllers.js")

router.get("/", getAllAuthors);
router.get("/:_id", getAuthor);

module.exports = router;