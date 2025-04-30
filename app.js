//initialize express environment
const express = require("express");
//allow the app to use the express package
const app = express();
//define a port number for the server to listen for a connection. 
const PORT = 3000;
//initialize and retain an index route to automatically render a message when the server starts
app.get("/",(request,response, next)  => {
    // response.send("Hello CodeSquad Cohort 2025, we are awesome!"); //render a str on the page
    response.json("hello world");//will send a json message
});//the only route that you keep so that we can see what's in the browswer - I want to see something when the server starts

//have the app listen at the PORT where a console.log says `Server is listening on ${PORT}. Connection established.`
app.listen( PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}. Connection established.`);
});