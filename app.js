//initialize express environment
const express = require("express");
//allow the app to use the express package
const app = express();

//define a port number for the server to listen for a connection.
const PORT = 3000;

//------------------- Middleware -------------------
//cors
const cors = require("cors");
//morgan
const morgan = require("morgan");

// NEW: add the path module
const path = require("node:path");

app.use(cors());
app.use(morgan("combined"));
//combined - show a log that is moe comprehensive
//dev - will show simpler information

//---------------------Per 2: CW: Dynamic Node Review -------------------------------
// Tell the app to use express to bundle all of the files within the  public directory
app.use(express.static(path.join(__dirname + "/public")));

// Tell the app to use express and JSON to read data
app.use(express.json());

//Tell the app to use express and urlencoded to
app.use(express.urlencoded({ extended: true }));

//end Middleware

//---------------------Per 2: CW: Dynamic Node Review -------------------------------
// -------------Create five basic GET routes with the following information using the .send method

//initialize and retain an index route to automatically render a message when the server starts
app.get("/", (request, response, next) => {
  // response.send("This route points to the Home page"); //render a str on the page
  // response.json("hello world");//will send a json message
  response.status(200).json({
    success: { message: "This route points to the Home page" },
    statusCode: 200,
  });
}); //the only route that you keep so that we can see what's in the browswer - I want to see something when the server starts

app.get("/admin", (request, response, next) => {
  // response.send("This route points to the Admin Console page");
  response.status(200).json({
    success: { message: "This route points to the Admin Console page" },
    statusCode: 200,
  });
});

app.get("/authors", (request, response, next) => {
  // response.send("This route points to the Author page");
  response.status(200).json({
    success: { message: "This route points to the Author page" },
    statusCode: 200,
  });
});

app.get("/books", (request, response, next) => {
  // response.send("This route points to the Books page")
  response.status(200).json({
    success: { message: "This route points to the Books page" },
    statusCode: 200,
  });
});

app.get("/site-routes", (request, response, next) => {
  // response.send("This route points to the site router page")
  response.status(200).json({
    success: { message: "This route points to the site router page" },
    statusCode: 200,
  });
});

// ---------------------------Per 3: CW: Dynamic Pass Data--------------------------------/
// Making different routes with parameters
// Create 4 NEW GET routes that send a request, receive a response, and move to the next block of code w/ .status().json and a success message :
// PATH: /books/create, HANDLER:"This route points to the Create Book page”
// PATH: /books/:_id, HANDLER: "This route points to the specific book via the ID”
// PATH: /authors/create, HANDLER: "This route points to the Create Author page”
// PATH: /authors/:_id, HANDLER: "This route points to the specific author via the ID”//

app.get("/books/create", (request, response, next) => {
  response.status(200).json({
    success: { message: "This route points to the Create Book page" },
    statusCode: 200,
  });
});
app.get("/books/:_id", (request, response, next) => {
  response.status(200).json({
    success: { message: "This route points to the specific book via the ID" },
    statusCode: 200,
  });
});
app.get("/authors/create", (request, response, next) => {
  response.status(200).json({
    success: { message: "This route points to the Create Author page" },
    statusCode: 200,
  });
});
app.get("/authors/:_id", (request, response, next) => {
  response.status(200).json({
    success: { message: "This route points to the specific author via the ID" },
    statusCode: 200,
  });
});

// est

//have the app listen at the PORT where a console.log says `Server is listening on ${PORT}. Connection established.`
app.listen(PORT, () => {
  console.log(
    `Server is listening on http://localhost:${PORT}. Connection established.`
  );

  console.log(
    `Carol's bookstore server is listening on port http://localhost:${PORT}. Connection established.`
  );
});
