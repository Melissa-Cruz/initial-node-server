//initialize express environment
const express = require("express");
//allow the app to use the express package
const app = express();

//------------------- Middleware -------------------
//cors
const cors = require("cors");
//morgan
const morgan = require("morgan");

//end Middleware

//define a port number for the server to listen for a connection. 
const PORT = 3000;

app.use(cors());
app.use(morgan("combined"));
//combined - show a log that is moe comprehensive 
//dev - will show simpler information

// Create five basic GET routes with the following information using the .send method

//initialize and retain an index route to automatically render a message when the server starts
app.get("/",(request,response, next)  => {
    response.send("This route points to the Home page"); //render a str on the page
    // response.json("hello world");//will send a json message
});//the only route that you keep so that we can see what's in the browswer - I want to see something when the server starts


app.get("/admin", (request, response, next)=>{
    response.send("This route points to the Admin Console page");
});

app.get("/authors", (request, response, next) =>{
    response.send("This route points to the Author page");
});

app.get("/books", (request, response, next) =>[
    response.send("This route points to the Books page")
]);

app.get("/site-routes", (request, response, next) =>[
    response.send("This route points to the site router page")
]);




//have the app listen at the PORT where a console.log says `Server is listening on ${PORT}. Connection established.`
app.listen( PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}. Connection established.`);

    console.log(`Carol's bookstore server is listening on port http://localhost:${PORT}. Connection established.`)
});